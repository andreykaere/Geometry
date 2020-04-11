
settings.outformat = "pdf";

import geometry;

size(6.2cm);

point S_ = (5,5);

point A = (0,0); 
point D = (6,0);
point B = (2.3,2);

ellipse el = ellipse(A,D,B);  

line[] t = tangents(el,S_);
line l1 = line(t[0].A, false, t[0].B, true);
line l2 = line(t[1].A, false, t[1].B, true);

line l3 = line(S_, false, B, true);
//point A  

line bis = bisector(l1,l2);
line bis = line(bis.A, false, bis.B, true);


line l4 = reflect(bis)*l3;

point C = intersectionpoints(l4,el)[0];


line t1 = tangents(el,C)[0];
line t2 = tangents(el,B)[0];

point F = intersectionpoints(l1, el)[0];
point E_  = intersectionpoints(l2, el)[0];

point I_ = intersectionpoint(t1,t2);

point X_ = intersectionpoint(line(F,B),line(C,E_));
point Y_ = intersectionpoint(line(E_,B),line(C,F));


//write(I_ @ bis);

//draw
draw(t2);

draw(F--X_--E_^^B--E_^^C--F, linewidth(0.3));
dot("$A$", A, W);
dot("$D$", D, S*.2+E*0.7);
dot("$B$", B, NW);
dot("$C$", C, NE);
dot("$S$", S_);
dot(Label("$I$", UnFill), I_, N*0.3+E*1.7);
draw(el,linewidth(1.3));

draw(t1);
dot("$F$", F, W);
dot("$E$", E_);


draw(l1);
draw(l2);
draw(l3);
draw(l4);

draw(bis, dashed);


markangle(l4,l2, radius=7.5mm);
markangle(l1,l3, radius=7.5mm);



dot("$X$", X_, NW);
dot("$Y$", Y_, S*1.3+E*0.7);

//draw(F--X_--E_^^B--E_^^C--F, linewidth(0.3));
//------------------------

//draw(A--I_--D);
