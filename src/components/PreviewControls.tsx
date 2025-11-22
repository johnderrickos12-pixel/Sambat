import React, { useState } from 'react';
import { Smartphone, Tablet, Monitor } from 'lucide-react';
import { clsx } from 'clsx';

type Device = 'mobile' | 'tablet' | 'desktop';

const PreviewControls = () => {
  const [activeDevice, setActiveDevice] = useState<Device>('desktop');

  const controlButton = (device: Device, Icon: React.ElementType) => {
    const isActive = activeDevice === device;
    return (
      <button
        onClick={() => setActiveDevice(device)}
        className={clsx(
          'p-2 rounded-md transition-colors duration-200',
          isActive
            ? 'bg-gray-700 text-white'
            : 'text-gray-400 hover:bg-gray-800 hover:text-white'
        )}
        aria-label={`Switch to ${device} view`}
      >
        <Icon className="w-5 h-5" />
      </button>
    );
  };

  return (
    <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-1 flex items-center gap-1">
      {controlButton('mobile', Smartphone)}
      {controlButton('tablet', Tablet)}
      {controlButton('desktop', Monitor)}
    </div>
  );
};

export default PreviewControls;
