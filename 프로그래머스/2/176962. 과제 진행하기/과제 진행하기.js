function solution(plans) {
  // 시간을 분(minute)으로 변환하는 함수 정의
  function timeToMinutes(time) {
    // 시간 문자열을 ":" 기준으로 분리하여 숫자로 변환
    const [hours, minutes] = time.split(":").map(Number);
    // 총 분으로 변환하여 반환
    return hours * 60 + minutes;
  }

  // 과제 정보를 처리하고 시작 시간 기준으로 정렬
  const tasks = plans
    .map((plan) => {
      return {
        name: plan[0],
        startTime: timeToMinutes(plan[1]),
        duration: parseInt(plan[2]),
      };
    })
    .sort((a, b) => a.startTime - b.startTime);

  const completedTasks = []; // 완료된 과제의 이름을 저장할 배열
  const pausedTasks = []; // 멈춘 과제들을 저장할 스택
  let currentTime = tasks[0].startTime; // 현재 시간 초기화 (첫 과제의 시작 시간)
  let currentTaskIndex = 0; // 현재 처리할 과제의 인덱스
  let currentTask = null; // 현재 진행 중인 과제

  // 모든 과제를 처리할 때까지 반복
  while (currentTaskIndex < tasks.length || currentTask || pausedTasks.length) {
    // 새로운 과제를 시작할 시간인지 확인
    if (
      currentTaskIndex < tasks.length &&
      currentTime === tasks[currentTaskIndex].startTime
    ) {
      // 진행 중인 과제가 있다면 멈추고 스택에 저장
      if (currentTask) {
        pausedTasks.push(currentTask);
      }
      // 새로운 과제를 현재 과제로 설정하고 남은 시간 초기화
      currentTask = tasks[currentTaskIndex];
      currentTask.remainingTime = currentTask.duration;
      currentTaskIndex++; // 다음 과제로 인덱스 증가
    }

    if (currentTask) {
      // 다음 이벤트(현재 과제 종료 또는 다음 과제 시작)까지의 시간 계산
      let nextEventTime = Infinity; // 다음 이벤트 시간 초기화
      if (currentTaskIndex < tasks.length) {
        // 다음 과제가 있다면 그 과제의 시작 시간이 다음 이벤트 시간
        nextEventTime = tasks[currentTaskIndex].startTime;
      }
      // 현재 과제가 종료되는 시간 계산
      const taskEndsAt = currentTime + currentTask.remainingTime;

      if (taskEndsAt <= nextEventTime) {
        // 현재 과제가 다음 과제 시작 전에 끝나는 경우
        currentTime = taskEndsAt; // 현재 시간을 과제 종료 시간으로 업데이트
        completedTasks.push(currentTask.name); // 완료된 과제 이름 저장
        currentTask = null; // 현재 과제 초기화

        // 멈춘 과제가 있다면 재개
        if (pausedTasks.length > 0) {
          currentTask = pausedTasks.pop(); // 가장 최근에 멈춘 과제 가져오기
        }
      } else {
        // 다음 과제 시작 전에 현재 과제를 끝낼 수 없는 경우
        currentTask.remainingTime -= nextEventTime - currentTime; // 남은 시간 업데이트
        currentTime = nextEventTime; // 현재 시간을 다음 과제 시작 시간으로 업데이트
      }
    } else {
      // 진행 중인 과제가 없다면 다음 과제의 시작 시간으로 이동
      if (currentTaskIndex < tasks.length) {
        currentTime = tasks[currentTaskIndex].startTime; // 현재 시간 업데이트
      }
    }
  }

  // 완료된 과제들의 이름을 순서대로 반환
  return completedTasks;
}