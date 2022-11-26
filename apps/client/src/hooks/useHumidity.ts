import axios from 'axios';
import { useEffect, useState } from 'react';

interface useHumidityProps {
    // sinceDate: String;
    device: String;
    timeRange: rangesType;
}

export const useHumidity = (props: useHumidityProps) => {
    const [humiResult, setHumiResult] = useState<Array<DataType>>([
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
    console.log('[useHumidity]: ', startDate.toISOString());
    let sinceDate = startDate.toISOString();
    const [humiError, setError] = useState('');
    const [humiLoading, setloading] = useState(true);
    const fetchData = () => {
        axios
            .get('api/metrics/' + props.device + '/humidity', {
                params: { since: sinceDate },
            })
            .then((res) => {
                console.log('[useHumidity]: fetchuje!');
                setHumiResult(res.data);
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

    return { humiResult, humiError, humiLoading };
};
