import { useEffect } from 'react';

/**
 * Execute the cb function when an event click
 * is triggered outside ref component
 * @param {object} ref
 * @param {Function} cb
 */
export const useOutsideClick = (ref, cb) => {
  useEffect(() => {

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) cb();
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}