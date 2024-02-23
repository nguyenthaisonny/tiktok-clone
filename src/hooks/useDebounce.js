import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handleDebounce = setTimeout(
            () => setDebouncedValue(value),
            delay,
        );
        return () => clearTimeout(handleDebounce);
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
