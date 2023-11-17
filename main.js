var button = document.getElementById("send");
button.addEventListener("click", function () {
    var e = 0
        , t = document.getElementById("age").value
        , n = [[2, 4], [6, 1], [3, 5], [0, 2], [4, 1], [3, 6], [5, 2], [0, 4], [2, 6], [3, 3], [4, 0], [5, 1], [2, 3], [5, 6], [1, 4], [2, 5], [6, 0], [1, 4], [2, 2], [1, 5], [0, 4], [6, 3], [2, 1], [3, 5], [6, 4], [3, 0], [1, 5], [2, 4], [5, 5], [3, 6], [5, 6], [4, 0], [4, 4], [1, 0], [6, 2], [3, 5], [6, 0], [4, 6], [3, 5], [2, 1], [5, 1], [0, 6], [4, 6], [3, 0], [2, 5], [5, 6], [2, 2], [1, 3]]
        , u = document.getElementById("uno-1").value
        , d = document.getElementById("uno-2").value
        , l = document.getElementById("dos-1").value
        , m = document.getElementById("dos-2").value
        , c = document.getElementById("tres-1").value
        , a = document.getElementById("tres-2").value
        , o = document.getElementById("cuatro-1").value
        , i = document.getElementById("cuatro-2").value
        , v = document.getElementById("cinco-1").value
        , I = document.getElementById("cinco-2").value
        , E = document.getElementById("seis-1").value
        , g = document.getElementById("seis-2").value
        , y = document.getElementById("siete-1").value
        , B = document.getElementById("siete-2").value
        , r = document.getElementById("ocho-1").value
        , s = document.getElementById("ocho-2").value
        , R = document.getElementById("nueve-1").value
        , h = document.getElementById("nueve-2").value
        , O = document.getElementById("diez-1").value
        , M = document.getElementById("diez-2").value
        , T = document.getElementById("once-1").value
        , L = document.getElementById("once-2").value
        , N = document.getElementById("doce-1").value
        , D = document.getElementById("doce-2").value
        , P = document.getElementById("trece-1").value
        , b = document.getElementById("trece-2").value
        , q = document.getElementById("catorce-1").value
        , z = document.getElementById("catorce-2").value
        , A = document.getElementById("quince-1").value
        , F = document.getElementById("quince-2").value
        , H = document.getElementById("dieciseis-1").value
        , S = document.getElementById("dieciseis-2").value
        , U = document.getElementById("diecisiete-1").value
        , f = document.getElementById("diecisiete-2").value
        , k = document.getElementById("dieciocho-1").value
        , C = document.getElementById("dieciocho-2").value
        , j = document.getElementById("diecinueve-1").value
        , p = document.getElementById("diecinueve-2").value
        , w = document.getElementById("veinte-1").value
        , x = document.getElementById("veinte-2").value
        , G = document.getElementById("veintiuno-1").value
        , J = document.getElementById("veintiuno-2").value
        , K = document.getElementById("veintidos-1").value
        , Q = document.getElementById("veintidos-2").value
        , V = document.getElementById("veintitres-1").value
        , W = document.getElementById("veintitres-2").value
        , X = document.getElementById("veinticuatro-1").value
        , Y = document.getElementById("veinticuatro-2").value
        , Z = document.getElementById("veinticinco-1").value
        , $ = document.getElementById("veinticinco-2").value
        , _ = document.getElementById("veintiseis-1").value
        , ee = document.getElementById("veintiseis-2").value
        , te = document.getElementById("veintisiete-1").value
        , ne = document.getElementById("veintisiete-2").value
        , ue = document.getElementById("veintiocho-1").value
        , de = document.getElementById("veintiocho-2").value
        , le = document.getElementById("veintinueve-1").value
        , me = document.getElementById("veintinueve-2").value
        , ce = document.getElementById("treinta-1").value
        , ae = document.getElementById("treinta-2").value
        , oe = document.getElementById("treintaiuno-1").value
        , ie = document.getElementById("treintaiuno-2").value
        , ve = document.getElementById("treintaidos-1").value
        , Ie = document.getElementById("treintaidos-2").value
        , Ee = document.getElementById("treintaitres-1").value
        , ge = document.getElementById("treintaitres-2").value
        , ye = document.getElementById("treintaicuatro-1").value
        , Be = document.getElementById("treintaicuatro-2").value
        , re = document.getElementById("treintaicinco-1").value
        , se = document.getElementById("treintaicinco-2").value
        , Re = document.getElementById("treintaiseis-1").value
        , he = document.getElementById("treintaiseis-2").value
        , Oe = document.getElementById("treintaisiete-1").value
        , Me = document.getElementById("treintaisiete-2").value
        , Te = document.getElementById("treintaiocho-1").value
        , Le = document.getElementById("treintaiocho-2").value
        , Ne = document.getElementById("treintainueve-1").value
        , De = document.getElementById("treintainueve-2").value
        , Pe = document.getElementById("cuarenta-1").value
        , be = document.getElementById("cuarenta-2").value
        , qe = document.getElementById("cuarentaiuno-1").value
        , ze = document.getElementById("cuarentaiuno-2").value
        , Ae = document.getElementById("cuarentaidos-1").value
        , Fe = document.getElementById("cuarentaidos-2").value
        , He = document.getElementById("cuarentaitres-1").value
        , Se = document.getElementById("cuarentaitres-2").value
        , Ue = document.getElementById("cuarentaicuatro-1").value
        , fe = document.getElementById("cuarentaicuatro-2").value
        , ke = document.getElementById("cuarentaicinco-1").value
        , Ce = document.getElementById("cuarentaicinco-2").value
        , je = document.getElementById("cuarentaiseis-1").value
        , pe = document.getElementById("cuarentaiseis-2").value
        , we = document.getElementById("cuarentaisiete-1").value
        , xe = document.getElementById("cuarentaisiete-2").value
        , Ge = document.getElementById("cuarentaiocho-1").value
        , Je = document.getElementById("cuarentaiocho-2").value;
    u == n[0][0] && d == n[0][1] && e++,
        l == n[1][0] && m == n[1][1] && e++,
        c == n[2][0] && a == n[2][1] && e++,
        o == n[3][0] && i == n[3][1] && e++,
        v == n[4][0] && I == n[4][1] && e++,
        E == n[5][0] && g == n[5][1] && e++,
        y == n[6][0] && B == n[6][1] && e++,
        r == n[7][0] && s == n[7][1] && e++,
        R == n[8][0] && h == n[8][1] && e++,
        O == n[9][0] && M == n[9][1] && e++,
        T == n[10][0] && L == n[10][1] && e++,
        N == n[11][0] && D == n[11][1] && e++,
        P == n[12][0] && b == n[12][1] && e++,
        q == n[13][0] && z == n[13][1] && e++,
        A == n[14][0] && F == n[14][1] && e++,
        H == n[15][0] && S == n[15][1] && e++,
        U == n[16][0] && f == n[16][1] && e++,
        k == n[17][0] && C == n[17][1] && e++,
        j == n[18][0] && p == n[18][1] && e++,
        w == n[19][0] && x == n[19][1] && e++,
        G == n[20][0] && J == n[20][1] && e++,
        K == n[21][0] && Q == n[21][1] && e++,
        V == n[22][0] && W == n[22][1] && e++,
        X == n[23][0] && Y == n[23][1] && e++,
        Z == n[24][0] && $ == n[24][1] && e++,
        _ == n[25][0] && ee == n[25][1] && e++,
        te == n[26][0] && ne == n[26][1] && e++,
        ue == n[27][0] && de == n[27][1] && e++,
        le == n[28][0] && me == n[28][1] && e++,
        ce == n[29][0] && ae == n[29][1] && e++,
        oe == n[30][0] && ie == n[30][1] && e++,
        ve == n[31][0] && Ie == n[31][1] && e++,
        Ee == n[32][0] && ge == n[32][1] && e++,
        ye == n[33][0] && Be == n[33][1] && e++,
        re == n[34][0] && se == n[34][1] && e++,
        Re == n[35][0] && he == n[35][1] && e++,
        Oe == n[36][0] && Me == n[36][1] && e++,
        Te == n[37][0] && Le == n[37][1] && e++,
        Ne == n[38][0] && De == n[38][1] && e++,
        Pe == n[39][0] && be == n[39][1] && e++,
        qe == n[40][0] && ze == n[40][1] && e++,
        Ae == n[41][0] && Fe == n[41][1] && e++,
        He == n[42][0] && Se == n[42][1] && e++,
        Ue == n[43][0] && fe == n[43][1] && e++,
        ke == n[44][0] && Ce == n[44][1] && e++,
        je == n[45][0] && pe == n[45][1] && e++,
        we == n[46][0] && xe == n[46][1] && e++,
        Ge == n[47][0] && Je == n[47][1] && e++;
    var Ke = 0
        , Qe = document.getElementById("labelPorcentil");
    t >= 12 && t <= 13 ? 38 == e ? Ke = 95 : 35 == e ? Ke = 90 : 32 == e ? Ke = 75 : 27 == e ? Ke = 50 : 22 == e ? Ke = 25 : 14 == e ? Ke = 10 : 9 == e && (Ke = 5) : t >= 14 && t <= 15 ? 39 == e ? Ke = 95 : 37 == e ? Ke = 90 : 33 == e ? Ke = 75 : 28 == e ? Ke = 50 : 23 == e ? Ke = 25 : 15 == e ? Ke = 10 : 11 == e && (Ke = 5) : t >= 16 && t <= 17 ? 41 == e ? Ke = 95 : 39 == e ? Ke = 90 : 34 == e ? Ke = 75 : 29 == e ? Ke = 50 : 24 == e ? Ke = 25 : 16 == e ? Ke = 10 : 12 == e && (Ke = 5) : t >= 18 && t <= 65 && (41 == e ? Ke = 95 : 40 == e ? Ke = 90 : 36 == e ? Ke = 75 : 31 == e ? Ke = 50 : 25 == e ? Ke = 25 : 20 == e ? Ke = 10 : 16 == e && (Ke = 5));
    var Ve = document.getElementById("rango");
    Ve.innerHTML = 95 == Ke ? "Rango SUPERIOR" : Ke >= 90 && Ke <= 75 ? "Rango SUPERIOR AL TÉRMINO MEDIO" : 50 == Ke ? "Rango TÉRMINO MEDIO" : Ke >= 25 && Ke <= 10 ? "Rango INFERIOR AL TÉRMINO MEDIO" : "Rango DEFICIENTE",
        Qe.innerHTML = "Porcentil: " + Ke + "%";

        console.log(window.location.href.replace('/index.html', '/resultados.html'));
        window.location.replace(window.location.href.replace('/index.html', '/resultados.html') + "?edad=" + t  + "&contador=" + e);

});
