import React, { useMemo } from 'react';
import { isNil } from 'remeda';
import {
  InformationCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/solid';
import { collapse } from '@growthops/ext-ts';

type FormFieldInputProps = {
  label: string;
  helpText?: string;
  error?: string;
  className?: string;
};

type FormFieldProps = {
  isRequired?: boolean;
  isDisabled?: boolean;
  children: (baseClasses: string) => JSX.Element;
} & FormFieldInputProps;

const generateMetaText = (
  text: string | undefined,
  additionalClasses: string,
  Svg: React.ElementType | any
) =>
  !isNil(text) && (
    <div
      className={collapse([
        'flex mt-1 items-center space-x-1',
        additionalClasses,
      ])}
    >
      <Svg className="w-4" />
      <span className="block text-xs">{text}</span>
    </div>
  );

const baseClasses = `
	mt-1
	rounded-lg
  border
  hover:border-g-30
  py-2
  px-3
	w-full
  text-sm
  leading-4
	text-white
  focus:bg-g-60
  focus:border-g-10
  transition-all
  ease-in-out
  outline-none
  placeholder:text-white/[32%]
  duration-300
  h-10
`;

const getErrorClasses = (error: string | undefined) =>
  isNil(error) ? 'border-g-60' : 'border-red-300';

const getDisabledClasses = (disabled: boolean | undefined) =>
  disabled ? 'bg-gray-200 cursor-not-allowed' : 'bg-g-80';

const FormField = ({
  className,
  label,
  isRequired,
  isDisabled,
  helpText,
  error,

  children,
}: FormFieldProps) => {
  const smartLabel = useMemo(
    () => `${label} ${isRequired ? '*' : ''}`.trim(),
    [label, isRequired]
  );

  const labelClasses = useMemo(
    () =>
      `block text-xs tracking-1 font-secondary leading-4 text-white/[56%] ${
        isNil(error) ? '' : 'text-red-500'
      }`,
    [error]
  );

  const fieldClasses = useMemo(
    () =>
      collapse([
        baseClasses,
        getErrorClasses(error),
        getDisabledClasses(isDisabled),
      ]),
    [error, isDisabled]
  );

  return (
    <div className={className}>
      <span className={labelClasses}>{smartLabel}</span>
      {children(fieldClasses)}
      {generateMetaText(helpText, 'text-true-gray-500', InformationCircleIcon)}
      {generateMetaText(error, 'text-red-500', ExclamationCircleIcon)}
    </div>
  );
};

export default FormField;

export type { FormFieldInputProps, FormFieldProps };
