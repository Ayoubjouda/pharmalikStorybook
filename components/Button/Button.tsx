import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import React, { FC, forwardRef } from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
interface ButtonProps
  extends TouchableOpacityProps,
    VariantProps<typeof buttonVariants> {
  label?: string;
  loading?: boolean;
}

const buttonVariants = cva(
  `active:scale-95 bg-transparent flex flex-row items-center  justify-center rounded-xl transition-colors focus:outline-none`,
  {
    defaultVariants: {
      size: 'default',
      text: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'py-2 px-3',
        icon: 'p-3',
        lg: 'py-3 px-6',
        md: 'py-2 px-4',
        sm: 'py-1 px-2',
      },
      text: {
        default: 'text-black font-bold text-[20px]',
        emergency: 'text-white font-bold text-[16px] ',
        icon: 'hidden ',
        primary: 'text-white font-bold text-[20px]',
        secondary: 'text-primary-60 font-bold text-[20px]',
      },
      variant: {
        default: 'bg-transparent',
        emergency:
          'flex-row-reverse bg-secondary-80 rounded-full max-w-[160px]	',
        icon: 'bg-neutral-10 w-fit rounded-full  ',
        primary: 'bg-primary-60 w-full',
        secondary: 'w-[340px] border-2 border-primary-60',
      },
    },
  }
);

const Button: FC<ButtonProps> = forwardRef<TouchableOpacity, ButtonProps>(
  (
    { children, className, label, loading, size, text, variant, ...props },
    ref
  ) => {
    return (
      <TouchableOpacity
        className={cn(
          buttonVariants({ className, size, variant }),
          `${props.disabled === true ? 'bg-neutral-60 border-neutral-60' : ''} `
        )}
        {...props}
        ref={ref}
        testID={props.testID ? props.testID : 'custom-button'}
      >
        {loading ? (
          //TODO: change Spinner
          <ActivityIndicator
            className="py-1"
            color={'white'}
            size="small"
          />
        ) : (
          <>
            <Text
              className={cn(
                buttonVariants({ text }),
                `${props.disabled === true ? 'text-white' : ''} `
              )}
              testID="custom-button-text"
            >
              {label}
            </Text>
            {children}
          </>
        )}
      </TouchableOpacity>
    );
  }
);

Button.displayName = 'Button';

export default Button;
