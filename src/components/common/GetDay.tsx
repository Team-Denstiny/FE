export function getTodayDay(): string {
    const days = ["일", "월", "화", "수", "목", "금", "토"]; // 요일 배열
    const today = new Date(); // 현재 날짜
    const dayIndex = today.getDay(); // 0 (일요일) ~ 6 (토요일)

    return days[dayIndex]; // 오늘 요일 반환
}
