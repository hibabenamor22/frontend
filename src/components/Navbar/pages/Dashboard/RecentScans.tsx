// src/components/RecentScans.js
import React from 'react';
import { Card, Text, Divider } from '@mantine/core';

const RecentScans = () => {
    return (
        <Card shadow="sm">
            <Text size="xl">
                Recent Scans
            </Text>
            <Divider />
            {/* Render recent scan data here */}
        </Card>
    );
};

export default RecentScans;
