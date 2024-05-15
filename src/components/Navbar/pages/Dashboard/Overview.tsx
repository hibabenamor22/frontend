// src/components/Overview.js
import React from 'react';
import { Card, Text, Divider } from '@mantine/core';

const Overview = () => {
    return (
        <Card shadow="sm">
            <Text size="xl">
                Overview
            </Text>
            <Divider />
            {/* Render overview data here */}
        </Card>
    );
};

export default Overview;
