import datetime
from datetime import timedelta, date, time, datetime


# date1 should be current day or the later of the two
# date 2 should be the earlier date -- it was purpose built to check against created_at dates from the Database.

def timesince(date1, date2):
    if date1 < date2:
        return False
    if date1 > date2:
        seconds = ((date1 - date2).total_seconds())
        minutes = ((date1 - date2).total_seconds()/60)
        hours = ((date1 - date2).total_seconds()/60/60)
        days = ((date1 - date2).total_seconds()/60/60/24)
    if round(seconds) > 59:
        if round(minutes) > 59:
            if round(hours) > 23:
                result = str(round(days)) + ' days'
            else:
                result = str(round(hours)) + ' hours'
        else:
            result = str(round(minutes)) + ' minutes'
    else:
        result = str(round(seconds)) + ' seconds'
    return result



# today = datetime.today()
# created_at = datetime(today.year, 10, 1, 5, 41, 0, 0)

# x = timesince(today, created_at)
# print(x)