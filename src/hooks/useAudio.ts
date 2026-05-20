// src/hooks/useAudio.ts
import { useState, useRef, useCallback } from 'react';

export const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const play = useCallback((url: string, text?: string) => {
    // 停止当前播放
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    
    // 取消任何正在进行的语音合成
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }

    // 使用 Web Speech API
    if (text && window.speechSynthesis) {
      // 等待语音加载完成
      const trySpeak = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        utterance.volume = 1;
        utteranceRef.current = utterance;
        
        utterance.onstart = () => {
          setIsPlaying(true);
        };
        
        utterance.onend = () => {
          setIsPlaying(false);
          utteranceRef.current = null;
        };
        
        utterance.onerror = (e) => {
          console.error('语音合成错误:', e);
          setIsPlaying(false);
          utteranceRef.current = null;
          // 如果语音合成失败，尝试播放音频文件
          if (audioRef.current) {
            audioRef.current.play().catch(err => console.error('音频播放失败:', err));
          }
        };
        
        window.speechSynthesis.speak(utterance);
      };
      
      // 确保语音服务就绪
      if (window.speechSynthesis.getVoices().length === 0) {
        window.speechSynthesis.onvoiceschanged = () => {
          trySpeak();
        };
      } else {
        trySpeak();
      }
      return;
    }
    
    // 后备：播放音频文件
    const audio = new Audio(url);
    audioRef.current = audio;
    
    audio.onplay = () => setIsPlaying(true);
    audio.onended = () => {
      setIsPlaying(false);
      audioRef.current = null;
    };
    audio.onerror = () => {
      console.error('音频加载失败:', url);
      setIsPlaying(false);
      audioRef.current = null;
    };

    audio.play().catch(err => {
      console.error('播放失败:', err);
      setIsPlaying(false);
    });
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    utteranceRef.current = null;
  }, []);

  return { play, stop, isPlaying };
};