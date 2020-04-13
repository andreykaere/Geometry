import geometry;

size(9cm);


point A = (3.3,10);
point B = (0,0);
point C = (12,0);

point D  = projection(line(B,C))*A;
point E_ = projection(line(A,C))*B;
point F  = projection(line(B,A))*C;

point H = intersectionpoint(line(A,D),line(C,F));

circle w_1 = incircle(A,E_,F);
circle w_2 = incircle(B,D,F);
circle w_3 = incircle(D,E_,C);

point I_1 = w_1.C;
point I_2 = w_2.C;
point I_3 = w_3.C;

line a = line(I_3,I_2);
line b = line(I_3,I_1);
line c = line(I_1,I_2);

point C_2 = intersectionpoint(b,line(A,B));
point B_2 = intersectionpoint(c,line(A,C));

point C_1 = intersectionpoint(a,line(A,B));
point B_1 = intersectionpoint(a,line(A,C));


point A_1 = intersectionpoint(b,line(C,B));
point A_2 = intersectionpoint(c,line(C,B));

circle W_a = circle(I_2,I_3,B_2);
circle W_b = circle(I_2,I_1,B_1);
circle W_c = circle(I_1,I_3,A_2);


point P = intersectionpoints(W_a,W_b)[1];
point Q = intersectionpoints(W_a,W_c)[1];
point T = intersectionpoints(W_c,W_b)[0];


point I_ = incircle(A,B,C).C;
//draw 

dot("$A$", A,NE);
dot("$B$", B,SW);
dot("$C$", C,SE);

draw(A--B--C--cycle);



dot("$D$", D, SE);
dot("$E$", E_);
dot("$F$", F, NW);

//draw(bisector(line(F,D),line(E_,D)));
dot("$H$", H, W+S*.2);
dot("$I$", I_);

draw(H--I_, dashed);

dot("$I_1$", I_1);
dot("$I_2$", I_2);
dot("$I_3$", I_3);

draw(D--F--E_--cycle);

draw(a^^b^^c, linewidth(0.1));

dot("$A_1$", A_1, S);
dot("$A_2$", A_2, S*1.3 + E*.3);
dot("$B_1$", B_1, N*1.3+E);
dot("$B_2$", B_2, N*.5+E);
dot("$C_1$", C_1, N*.7+W);
dot("$C_2$", C_2, N*.5+W);

draw(W_a^^W_c^^W_b,linewidth(0.1)+dashed);


dot("$P$", P, NE);
dot("$Q$", Q,W);
dot("$T$", T,SW);


draw(I_1--T^^I_3--Q^^I_2--P, linewidth(.1));
dot(intersectionpoint(line(I_3,Q),line(T, I_1)));
