function Start() {
    let a = document.getElementById('Num').value;
    A = parseInt(a);
    let Log = 'True';
    let N = 2;
    let i = 1;
    if (A > 0) {
        document.write(A, " so nguyen to dau tien ", "<br>");
        while (i <= A) {
            let dem = 'True';
            for (j = 2; j < N; j++) {
                if (N % j == 0) {
                    dem='False';
                    break;
                }
            }
            if (dem == 'True') {
                document.write(N, "<br>");
                i++;
            }
            N++;
        }
    } else {
        alert('Hay nhap lai so ');
    }
}



