import geometry;

//size(7.5cm);
size(8cm);


//point A = (2.7,16.3);
point A = (1.7,16.3);
point B = (-.5,0); 
point C = (25,0);


line k = bisector(segment(A,C));

point P = intersectionpoint(k,line(B,C));

circle w = circle(A,B,C);

line l = bisector(segment(B,C));

point Q = reflect(l)*P;

point S_ = intersectionpoint(bisector(segment(B,P)), tangent(w,B));

point E_ = intersectionpoint(parallel(Q, line(A,C)), line(A,P));

point O_ = w.C;

point T = intersectionpoint(line(S_,P), line(A,C));

circle g = circle(A,B,P);

point J = intersectionpoints(line(Q,T),g)[1];

point F = reflect(l)*J;

circle p = circle(S_,C,B);

point N_ = intersectionpoint(line(E_,C),line(A,S_));

point X_ = midpoint(segment(intersectionpoints(line(B,S_), g)[1], B));

circle x = circle(J,P,Q);
circle y = circle(Q,C,J);

//draw
fill(B--A--S_--cycle, rgb("d0d0d0"));
fill(E_--C--Q--cycle, rgb("d0d0d0"));
fill(J--Q--C--cycle, opacity(.2)+rgb(66,161,245));
fill(J--B--S_--cycle, opacity(.2)+rgb(66,161,245));

markangle(A,B,X_, n=1, radius=5mm);
markangle(A,C,B, n=1, radius=5mm);
markangle(E_,Q,P, n=1, radius=5mm);
markangle(C,B,T, n=1, radius=5mm);
markangle(P,A,C, n=1, radius=5mm);


markangle(Q,J,C, n=1, radius=4.3mm, rgb("262625"), Fill(rgb("262625")));
markangle(B,F,P, n=1, radius=4.3mm, rgb("262625"), Fill(rgb("262625")));
markangle(B,J,S_, n=1, radius=4.3mm, rgb("262625"), Fill(rgb("262625")));

markangle(Q,T,C, n=2, radius=2.7mm);
markangle(J,T,A, n=2, radius=2.7mm);
markangle(B,T,P, n=2, radius=2.7mm);

draw(w,linewidth(0.3));
draw(Label("$\Gamma$", Relative(.4)), g,dashed+linewidth(0.3));
//draw(Label("$\xi$", Relative(-0.08), SE, black), p,red+Dotted()+linewidth(0.7));
draw(p,red+Dotted()+linewidth(0.7));

draw(A--B--C--A);
draw(A--Q--E_--C);
draw(A--S_--F^^B--S_);
draw(C--F^^B--J);
//draw(E_--N_);
draw(line(S_,false,B));

draw(S_--J--C, linewidth(.2));
draw(A--J--P, linewidth(.2));

draw(A--P^^B--T^^B--O_--A^^B--F, linewidth(.2));
draw(Label("$\ell$", Relative(.17)), l, linewidth(0.4));

draw(J--Q);

draw(Label("$\beta$", Relative(.05)), x);
//clipdraw(y, linewidth(.3));
//draw(S_--C);

dot("$A$", A, NW);
dot("$B$", B, SW);
dot("$C$", C, SE);

dot("$P$", P, S*1.5+0.5*E);
dot("$T$", T, E*1.3+N*.2);
dot("$J$", J, N*1.7+W*.3);
dot("$F$", F, NE);

dot("$Q$", Q, S*1.3+0.7*E);
dot("$S$", S_, SW);
dot("$E$", E_, S*.5+W*.7);
dot("$O$", O_, S*.3+E*.3);
//dot("$N$", N_, N+W*.7);
dot("$X$", X_, N*.5+W*.7);


