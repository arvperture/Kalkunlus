import { useState, useEffect } from 'react'

export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY || document.documentElement.scrollTop)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return scrollPosition
}

export const useParallax = (speed = 0.5) => {
    const [offset, setOffset] = useState(0)
    const scrollPosition = useScrollPosition()

    useEffect(() => {
        setOffset(scrollPosition * speed)
    }, [scrollPosition, speed])

    return offset
}

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 0,
        height: typeof window !== 'undefined' ? window.innerHeight : 0,
    })

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}

export const useDarkMode = () => {
    const [isDark, setIsDark] = useState(true)

    return { isDark, setIsDark }
}
