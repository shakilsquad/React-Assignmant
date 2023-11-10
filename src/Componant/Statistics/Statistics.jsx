import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie } from 'recharts';


const Statistics = () => {
    const data = [
        { name: "g1", value: 66.3 },
        { name: "g2", value: 33.3 },

    ]
    return (
        <div>

            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#FF444A"
                    label
                />
                <Pie dataKey="value" data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" />
                <Tooltip />
            </PieChart>
            <br />

        </div>
    );
};

export default Statistics;