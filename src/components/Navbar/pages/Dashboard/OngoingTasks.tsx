// src/components/OngoingTasks.js
import React from 'react';
import { Card, Text, Divider } from '@mantine/core';

const OngoingTasks = () => {
    return (
        <Card shadow="sm">
            <Text size="xl">
                Ongoing Tasks
            </Text>
            <Divider />
            {/* Render ongoing tasks data here */}
        </Card>
    );
};

export default OngoingTasks;
