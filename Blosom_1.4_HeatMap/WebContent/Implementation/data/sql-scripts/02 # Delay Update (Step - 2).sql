;use [Airport Efficiency];

;update [Delay] set [Arrival Flights Total Count] = 0 where [Arrival Flights Total Count] is null
;update [Delay] set [Arrival Delay Total Count] = 0 where [Arrival Delay Total Count] is null
;update [Delay] set [Carrier Delay Count] = 0 where [Carrier Delay Count] is null
;update [Delay] set [Weather Delay Count] = 0 where [Weather Delay Count] is null
;update [Delay] set [NAS Delay Count] = 0 where [NAS Delay Count] is null
;update [Delay] set [Security Delay Count] = 0 where [Security Delay Count] is null
;update [Delay] set [Late Aircraft Delay Count] = 0 where [Late Aircraft Delay Count] is null
;update [Delay] set [Arrivals Cancelled] = 0 where [Arrivals Cancelled] is null
;update [Delay] set [Arrivals Diverted] = 0 where [Arrivals Diverted] is null
;update [Delay] set [Arrival Delay Minutes] = 0 where [Arrival Delay Minutes] is null
;update [Delay] set [Carrier Delay Minutes] = 0 where [Carrier Delay Minutes] is null
;update [Delay] set [Weather Delay Minutes] = 0 where [Weather Delay Minutes] is null
;update [Delay] set [NAS Delay Minutes] = 0 where [NAS Delay Minutes] is null
;update [Delay] set [Security Delay Minutes] = 0 where [Security Delay Minutes] is null
;update [Delay] set [Late Aircraft Delay Minutes] = 0 where [Late Aircraft Delay Minutes] is null

;update [Delay] set [Carrier Delay Percentage] = case when [Arrival Delay Total Count] > 0 then (([Carrier Delay Count] * 100) / ([Arrival Delay Total Count] * 1.0)) else 0 end
;update [Delay] set [Weather Delay Percentage] = case when [Arrival Delay Total Count] > 0 then (([Weather Delay Count] * 100) / ([Arrival Delay Total Count] * 1.0)) else 0 end
;update [Delay] set [NAS Delay Percentage] = case when [Arrival Delay Total Count] > 0 then (([NAS Delay Count] * 100) / ([Arrival Delay Total Count] * 1.0)) else 0 end
;update [Delay] set [Security Delay Percentage] = case when [Arrival Delay Total Count] > 0 then (([Security Delay Count] * 100) / ([Arrival Delay Total Count] * 1.0)) else 0 end
;update [Delay] set [Late Aircraft Delay Percentage] = case when [Arrival Delay Total Count] > 0 then (([Late Aircraft Delay Count] * 100) / ([Arrival Delay Total Count] * 1.0)) else 0 end

;update [Delay] set [Efficiency Factor] = case when [Arrival Flights Total Count] > 0 then ((([Arrival Flights Total Count] - [Arrival Delay Total Count]) * 100) / ([Arrival Flights Total Count] * 1.0)) else 0 end;