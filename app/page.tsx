'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const scenes = [
  {
    id: 1,
    duration: 2000,
    text: "كلنا نضيع أحيانًا…",
    description: "خلفية داكنة مع إضاءة بسيطة تتحرك"
  },
  {
    id: 2,
    duration: 2000,
    text: "لكن دائمًا هناك بوصلة تعيدنا للطريق الصحيح.",
    description: "شخص يقف أمام طريق متشعب"
  },
  {
    id: 3,
    duration: 3000,
    text: "بوصلة الحياة…",
    description: "ضوء يتجمع ليشكل بوصلة متوهجة",
    showCompass: true
  },
  {
    id: 4,
    duration: 3000,
    text: "7 خطوات تعيد توازنك وتفتح لك باب الازدهار.",
    description: "ظهور غلاف الكتاب",
    showBook: true
  },
  {
    id: 5,
    duration: 3000,
    text: "رحلة تغيير حقيقية… تبدأ الآن.",
    description: "شخص يكتب، يتأمل، أو يعمل بثقة",
    showCTA: true
  }
];

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    if (currentScene >= scenes.length) {
      setIsPlaying(false);
      setCurrentScene(0);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentScene(prev => prev + 1);
    }, scenes[currentScene].duration);

    return () => clearTimeout(timer);
  }, [currentScene, isPlaying]);

  const startVideo = () => {
    setCurrentScene(0);
    setIsPlaying(true);
  };

  const resetVideo = () => {
    setCurrentScene(0);
    setIsPlaying(false);
  };

  const scene = scenes[currentScene];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      <div className="w-full max-w-4xl">
        {!isPlaying ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
              بوصلة الحياة
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">
              رحلة تغيير حقيقية في 7 خطوات
            </p>
            <button
              onClick={startVideo}
              className="px-12 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-2xl shadow-amber-500/50"
            >
              ابدأ المشاهدة
            </button>
          </motion.div>
        ) : (
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
              {currentScene < scenes.length && (
                <motion.div
                  key={scene.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Scene 1: Moving light particles */}
                  {scene.id === 1 && (
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-radial from-gray-800 to-black" />
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-amber-400 rounded-full"
                          initial={{
                            x: Math.random() * 100 + '%',
                            y: Math.random() * 100 + '%',
                            opacity: 0
                          }}
                          animate={{
                            x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                            y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                            opacity: [0, 0.8, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                          }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Scene 2: Forked path with fog */}
                  {scene.id === 2 && (
                    <div className="relative w-full h-full bg-gradient-to-t from-gray-900 via-gray-800 to-gray-700">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-600/30 to-transparent"
                        animate={{
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity
                        }}
                      />
                      <svg className="absolute bottom-0 w-full h-3/4" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M50 100 L40 50 L20 0" stroke="#4B5563" strokeWidth="2" fill="none" opacity="0.5" />
                        <path d="M50 100 L60 50 L80 0" stroke="#4B5563" strokeWidth="2" fill="none" opacity="0.5" />
                      </svg>
                      <motion.div
                        className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 w-20 h-32 bg-gradient-to-t from-gray-700 to-transparent rounded-t-full"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  )}

                  {/* Scene 3: Glowing compass formation */}
                  {scene.id === 3 && scene.showCompass && (
                    <div className="relative w-full h-full flex items-center justify-center bg-black">
                      <motion.div
                        className="relative w-64 h-64"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      >
                        {/* Compass circle */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-4 border-amber-500 shadow-2xl shadow-amber-500/50"
                          animate={{
                            boxShadow: [
                              '0 0 30px rgba(245, 158, 11, 0.5)',
                              '0 0 60px rgba(245, 158, 11, 0.8)',
                              '0 0 30px rgba(245, 158, 11, 0.5)'
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        {/* North pointer */}
                        <motion.div
                          className="absolute top-4 left-1/2 w-1 h-24 bg-gradient-to-b from-amber-400 to-amber-600 origin-bottom"
                          style={{ transform: 'translateX(-50%)' }}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        />
                        {/* Cardinal points */}
                        <div className="absolute inset-0 flex items-center justify-center text-amber-400 font-bold text-2xl">
                          <span className="absolute top-0">N</span>
                          <span className="absolute bottom-0">S</span>
                          <span className="absolute left-0">W</span>
                          <span className="absolute right-0">E</span>
                        </div>
                        {/* Center dot */}
                        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-amber-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                      </motion.div>
                    </div>
                  )}

                  {/* Scene 4: Book cover reveal */}
                  {scene.id === 4 && scene.showBook && (
                    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-amber-900/20">
                      <motion.div
                        className="relative w-64 h-80 bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 rounded-lg shadow-2xl shadow-amber-500/30 overflow-hidden"
                        initial={{ rotateY: -90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ transformStyle: 'preserve-3d' }}
                      >
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                          <div className="w-24 h-24 mb-6 rounded-full border-4 border-white/80 flex items-center justify-center">
                            <div className="w-16 h-16 border-t-4 border-r-4 border-white/80 rounded-full transform rotate-45" />
                          </div>
                          <h2 className="text-3xl font-bold text-white mb-4">بوصلة الحياة</h2>
                          <p className="text-sm text-white/90">7 خطوات للازدهار</p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </motion.div>
                    </div>
                  )}

                  {/* Scene 5: Person working with confidence */}
                  {scene.id === 5 && scene.showCTA && (
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
                      <motion.div
                        className="text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                      >
                        <motion.div
                          className="mb-8"
                          animate={{
                            scale: [1, 1.1, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity
                          }}
                        >
                          <svg className="w-32 h-32 mx-auto text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </div>
                  )}

                  {/* Text overlay for all scenes */}
                  <motion.div
                    className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/70 to-transparent"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <p className="text-2xl md:text-4xl font-bold text-center text-white leading-relaxed">
                      {scene.text}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
              <motion.div
                className="h-full bg-amber-500"
                initial={{ width: '0%' }}
                animate={{
                  width: `${((currentScene + 1) / scenes.length) * 100}%`
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        )}

        {isPlaying && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={resetVideo}
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-full font-bold transition-all"
            >
              إعادة التشغيل
            </button>
          </div>
        )}
      </div>

      {/* Scene timeline indicator */}
      {!isPlaying && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-gray-500 max-w-2xl"
        >
          <p className="text-sm mb-4">المشاهد الخمسة:</p>
          <div className="flex justify-center gap-2 flex-wrap">
            {scenes.map((s, i) => (
              <div key={s.id} className="text-xs bg-gray-800/50 px-3 py-2 rounded">
                {i + 1}. {s.description}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </main>
  );
}
