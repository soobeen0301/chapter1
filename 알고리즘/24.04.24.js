// funcion solution(numbers) {
//     var answer = 0;
//     return answer;
// }

function solution(numbers) {
    var answer = 0;
    //코드 짜기
    a = numbers.length
    for(i = 0; i < a; i++) {
        answer += numbers[i];
    };
    answer = answer/a;
    //
    return answer;
}