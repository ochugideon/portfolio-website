import React from 'react';
import * as Icons from 'lucide-react';

interface SmartIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  name: string;
  size?: number | string;
  className?: string;
}

export default function SmartIcon({ name, size = 20, className, ...props }: SmartIconProps) {
  // Gracefully fallback if the requested icon name is not found
  const IconComponent = (Icons as any)[name];
  
  if (!IconComponent) {
    return <Icons.HelpCircle size={size} className={className} {...props} />;
  }

  return <IconComponent size={size} className={className} {...props} />;
}
