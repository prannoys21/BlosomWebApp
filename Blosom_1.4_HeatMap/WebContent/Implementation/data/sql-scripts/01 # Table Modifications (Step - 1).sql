;use [Airport Efficiency];

-- Airports
;EXEC sp_rename 'Airports.IATA', 'Airport IATA', 'COLUMN';
;EXEC sp_rename 'Airports.ICAO', 'Airport ICAO', 'COLUMN';

;alter table [Airports] alter column [Airport ID] int;

-- Delay

;EXEC sp_rename 'Delay.year', 'Year', 'COLUMN';
;EXEC sp_rename 'Delay.[ month]', 'Month', 'COLUMN';
;EXEC sp_rename 'Delay.carrier', 'Carrier', 'COLUMN';
;EXEC sp_rename 'Delay.carrier_name', 'Carrier Name', 'COLUMN';
;EXEC sp_rename 'Delay.airport', 'Airport', 'COLUMN';
;EXEC sp_rename 'Delay.airport_name', 'Airport Full Name', 'COLUMN';
;EXEC sp_rename 'Delay.city', 'City', 'COLUMN';
;EXEC sp_rename 'Delay.state', 'State', 'COLUMN';
;EXEC sp_rename 'Delay.arr_flights', 'Arrival Flights Total Count', 'COLUMN';
;EXEC sp_rename 'Delay.arr_del15', 'Arrival Delay Total Count', 'COLUMN';
;EXEC sp_rename 'Delay.carrier_ct', 'Carrier Delay Count', 'COLUMN';
;EXEC sp_rename 'Delay.[ weather_ct]', 'Weather Delay Count', 'COLUMN';
;EXEC sp_rename 'Delay.nas_ct', 'NAS Delay Count', 'COLUMN';
;EXEC sp_rename 'Delay.security_ct', 'Security Delay Count', 'COLUMN';
;EXEC sp_rename 'Delay.late_aircraft_ct', 'Late Aircraft Delay Count', 'COLUMN';
;EXEC sp_rename 'Delay.arr_cancelled', 'Arrivals Cancelled', 'COLUMN';
;EXEC sp_rename 'Delay.arr_diverted', 'Arrivals Diverted', 'COLUMN';
;EXEC sp_rename 'Delay.[ arr_delay]', 'Arrival Delay Minutes', 'COLUMN';
;EXEC sp_rename 'Delay.[ carrier_delay]', 'Carrier Delay Minutes', 'COLUMN';
;EXEC sp_rename 'Delay.weather_delay', 'Weather Delay Minutes', 'COLUMN';
;EXEC sp_rename 'Delay.nas_delay', 'NAS Delay Minutes', 'COLUMN';
;EXEC sp_rename 'Delay.security_delay', 'Security Delay Minutes', 'COLUMN';
;EXEC sp_rename 'Delay.late_aircraft_delay', 'Late Aircraft Delay Minutes', 'COLUMN';

;alter table [Delay] alter column [Year] int;
;alter table [Delay] alter column [Month] int;
;alter table [Delay] alter column [Arrival Flights Total Count] int;
;alter table [Delay] alter column [Arrival Delay Total Count] int;
;alter table [Delay] alter column [Arrivals Cancelled] int;
;alter table [Delay] alter column [Arrivals Diverted] int;
;alter table [Delay] alter column [Arrival Delay Minutes] int;
;alter table [Delay] alter column [Carrier Delay Minutes] int;
;alter table [Delay] alter column [Weather Delay Minutes] int;
;alter table [Delay] alter column [NAS Delay Minutes] int;
;alter table [Delay] alter column [Security Delay Minutes] int;
;alter table [Delay] alter column [Late Aircraft Delay Minutes] int;

;alter table [Delay] add [Efficiency Factor] decimal(5,2) not null default(0);
;alter table [Delay] add [Carrier Delay Percentage] decimal(5,2) not null default(0);
;alter table [Delay] add [Weather Delay Percentage] decimal(5,2) not null default(0);
;alter table [Delay] add [NAS Delay Percentage] decimal(5,2) not null default(0);
;alter table [Delay] add [Security Delay Percentage] decimal(5,2) not null default(0);
;alter table [Delay] add [Late Aircraft Delay Percentage] decimal(5,2) not null default(0);

;delete from [Airports] where [Airport ID] is null;