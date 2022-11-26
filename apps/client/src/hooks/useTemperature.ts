import axios from 'axios';
import { useEffect, useState } from 'react';

interface useTemperatureProps {
    // sinceDate: String;
    device: String;
    timeRange: rangesType;
}

export const useTemperature = (props: useTemperatureProps) => {
    const url = 'localhost';
    const [tempResult, setTempResult] = useState<Array<DataType>>([
        { t: '0', v: 0 },
    ]);
    let startDate = new Date();
    if (props.timeRange === 'day') {
        startDate.setDate(startDate.getDay() - 1);
    } else if (props.timeRange === 'week') {
        startDate.setDate(startDate.getDate() - 7);
    } else if (props.timeRange === 'month') {
        startDate.setMonth(startDate.getMonth() - 1);
    } else if (props.timeRange === 'year') {
        startDate.setMonth(startDate.getMonth() - 12);
    }
    console.log('[useTemperature]: ', startDate.toISOString());
    let sinceDate = startDate.toISOString();
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);
    const fetchData = () => {
        axios
            .get('api/metrics/' + props.device + '/temperature', {
                params: { since: sinceDate },
            })
            .then((res) => {
                console.log('[useTemperature]: fetchuje!');
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
    }, [props.timeRange]);

    return { tempResult, error, loading };
};
