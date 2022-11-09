import axios from 'axios';
import { useEffect, useState } from 'react';

interface useTemperatureProps {
    sinceDate: String;
    device: String;
}

export const useTemperature = (props: useTemperatureProps) => {
    const url = 'localhost';
    const [tempResult, setTempResult] = useState<Array<DataType>>([
        { t: '0', v: 0 },
    ]);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const fetchData = () => {
        axios
            .get('api/metrics/' + props.device + '/temperature', {
                params: { since: props.sinceDate },
            })
            .then((res) => {
                setTempResult(res.data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { tempResult, error, loading };
};
