
settings.outformat = "pdf";

import geometry;

size(8cm);

point S_ = (5,5);

point A = (0,0); 
point D = (6,0);
point B = (3,2);

ellipse el = ellipse(A,D,B);  

line[] t = tangents(el,S_);
//line l1 = line(t[0].A, false, t[0].B, true);
//line l2 = line(t[1].A, false, t[1].B, true);

line l1 = line(S_, false, A);
line l2 = line(S_, false, D);


line l3 = line(S_, false, B, true);
//point A  

line bis = bisector(l1,l2);
line bis = line(bis.A, false, bis.B, true);


line l4 = reflect(bis)*l3;

point C = intersectionpoints(l4,el)[0];


line t1 = tangents(el,C)[0];
line t2 = tangents(el,B)[0];

point I_ = intersectionpoint(t1,t2);


point P = intersectionpoint(line(C,D),line(A,B));
point Q = intersectionpoint(line(C,A),line(D,B));


point H = projection(Q,D)*I_;


//write(I_ @ bis);

//draw
dot("$A$", A, W*1.5+N*0.5);
dot("$D$", D);
dot("$B$", B, NW);
dot("$C$", C, NE);
dot("$S$", S_);
dot("$I$", I_, N*.7+E*1.2);
clipdraw(el,linewidth(0.3));
dot("$P$", P, W);
dot("$Q$", Q, 1.2*S+.3*E);

draw(l1);
draw(l2);
draw(l3);
draw(l4);

draw(bis, dashed);

draw(t1,linewidth(0.3));
draw(t2,linewidth(0.3));

markangle(l4,l2, radius=7.5mm);
markangle(l1,l3, radius=7.5mm);


markangle(Q,B,I_,radius=5mm);
markangle(I_,B,P,radius=4mm);
markangle(line(I_,B),line(A,B),radius=5mm);
draw(B--D^^A--C);
draw(line(D,C));
draw(line(B,A));

draw(circle(I_,length(segment(I_,H))));

//------------------------

//draw(A--I_--D);
