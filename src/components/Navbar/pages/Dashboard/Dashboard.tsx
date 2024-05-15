import React from 'react';
import { NavbarNested } from '../../NavbarNested'; 
import { LeadGrid } from './LeadGrid';

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <NavbarNested /> 
      <div style={{ flex: 1 }}> {/* Adjust the width of this div to occupy remaining space */}
        <LeadGrid />
      </div>
      <div>
      </div>
    </div>
  );
}

export default Dashboard;
