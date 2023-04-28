// Overload functions:
function createDate(timeStamp: number): Date;
function createDate(day: number, month: number, year: number): Date;

function createDate(
  timeStampOrDay: number,
  month?: number,
  year?: number
): Date {
  return month === undefined || year === undefined
    ? new Date(timeStampOrDay)
    : new Date(timeStampOrDay, month, year);
}
