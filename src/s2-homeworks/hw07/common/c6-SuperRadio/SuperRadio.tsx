import { Radio } from '@mui/material';
import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: any[]
    onChangeOption?: (option: any) => void

    spanProps?: DefaultSpanPropsType // пропсы для спана
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
    const onChangeCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
        // делают студенты
        onChangeOption?.(parseInt(e.currentTarget.value))
    }
    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: any[] = options
        ? options.map((o) => (
              <label key={name + '-' + o.id} className={s.label}>
                  <Radio
                      id={id + '-input-' + o.id}
                      className={finalRadioClassName}
                      name={name}
                      checked={value === o.id}
                      value={o.id}
                      onChange={onChangeCallback}
                  />
                  {/*<input*/}
                  {/*    id={id + '-input-' + o.id}*/}
                  {/*    className={finalRadioClassName}*/}
                  {/*    type={'radio'}*/}
                  {/*    // name, checked, value делают студенты*/}
                  {/*    name={name}*/}
                  {/*    checked={value === o.id}*/}
                  {/*    value={o.id}*/}
                  {/*    onChange={onChangeCallback}*/}
                  {/*    {...restProps}*/}
                  {/*/>*/}
                  <span
                      id={id + '-span-' + o.id}
                      {...spanProps}
                      className={spanClassName}
                  >
                      {o.value}
                  </span>
              </label>
          ))
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
