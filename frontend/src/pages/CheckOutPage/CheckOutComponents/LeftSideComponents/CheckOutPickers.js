import React from 'react';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Controller } from 'react-hook-form';
import dayjs from 'dayjs';

export const CheckOutPickers = ({ control, timeError }) => {
	return (
		<Controller
			control={control}
			name="time"
			rules={{ required: true }}
			render={({ field }) => {
				return (
					<LocalizationProvider dateAdapter={AdapterDayjs}>
						<TimePicker
							{...field}
							label="К какому времени приготовить заказ"
							format="HH:mm"
							views={['hours', 'minutes']}
							ampm={false}
							timeSteps={{ hours: 1, minutes: 1 }}
							disablePast
							minTime={dayjs().set('hour', 8).startOf('hour')}
							maxTime={dayjs().set('hour', 22).startOf('hour')}
							sx={{
								width: '100%',
							}}
							slotProps={{
								textField: {
									error: timeError,
									helperText: timeError,
								},
							}}
						/>
					</LocalizationProvider>
				);
			}}
		/>
	);
};
