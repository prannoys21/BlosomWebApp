;use [Airport Efficiency];

--Joining Airports and Delay tables into Airports_Delay

;IF OBJECT_ID('dbo.AirportDelayData', 'U') IS NOT NULL DROP TABLE dbo.AirportDelayData
;IF OBJECT_ID('tempdb.dbo.#AirportDelayData', 'U') IS NOT NULL DROP TABLE #AirportDelayData

;select [Airports].[Airport IATA], [Airports].[Airport Name], [Airports].[Latitude], [Airports].[Longitude], [Airports].[Altitude], 
[Airports].[City], [Delay].[State], [Delay].[Carrier], [Delay].[Carrier Name], [Delay].[Year], [Delay].[Month], 
CAST(STR(100 * [Year] + [Month]) as int) as [Delay Date], 
[Delay].[Arrival Flights Total Count], [Delay].[Arrival Delay Total Count], [Delay].[Efficiency Factor], 
[Delay].[Carrier Delay Count], [Delay].[Weather Delay Count], [Delay].[NAS Delay Count], [Delay].[Security Delay Count], 
[Delay].[Late Aircraft Delay Count], [Delay].[Arrivals Cancelled], [Delay].[Arrivals Diverted], [Delay].[Arrival Delay Minutes], 
[Delay].[Carrier Delay Minutes], [Delay].[Weather Delay Minutes], [Delay].[NAS Delay Minutes], [Delay].[Security Delay Minutes], 
[Delay].[Late Aircraft Delay Minutes], [Delay].[Carrier Delay Percentage], [Delay].[Weather Delay Percentage], 
[Delay].[NAS Delay Percentage], [Delay].[Security Delay Percentage], [Delay].[Late Aircraft Delay Percentage]
into AirportDelayData
from [Airports] inner join [Delay] on [Airports].[Airport IATA] = [Delay].[Airport];