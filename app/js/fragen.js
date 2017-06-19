var idCount = 0;

function Question (question, is_correct) {
	idCount += 1;
	this.id = idCount;
	this.question = question;
	this.is_correct = is_correct;
}

var fragenTest1 = [
	new Question('Bei einem Color Filter Array wird für jedes Pixel entweder der rote, grüne oder blaue Farbanteil gemessen.', true),
	new Question('Die sphärische Aberration führt zu Farbverfälschungen im Bild.', false),
	new Question('Je größer die Brennweite, desto kleiner erscheinen Objekte im Bild.', false),
	new Question('Die Brennweite hat einen Einfluss auf den Tiefenschärfebereich.', true),
	new Question('256 ist eine mögliche radiometrische Auflösung eines digitalen Bildes.', true),
	new Question('Nach der Korrektur einer geometrischen Linsenverzerrung erscheinen gerade Kanten im Bild ebenfalls gerade.', true),
	new Question('Die plenoptische Funktion hat mehrere Ausgabeparameter, aber nur einen Eingabeparameter.', false),
	new Question('Farbe wird bei der plenoptischen Funktion nicht berücksichtigt.', false),
	new Question('Camera Obscura: Weiter entfernte Objekte erscheinen größer auf der Projektion.', false),
	new Question('Das Loch (die Blende) sollte für eine optimale Abbildung so klein wie möglich gewählt werden.', false),
	new Question('Eine zu große Blende führt zu einem unscharfen Bild.', true),
	new Question('Camera Obscura: Die projiziert Bilder sind schwarz-weiß, die Farbinformation geht verloren.', false),
	new Question('Verschiedene Lichtspektren können den gleichen Farbeindruck erzeugen.', true),
	new Question('HSV schwarz ist wenn S=0.', false),
	new Question('RGB kann alle menschlich wahrnehmbaren Farben darstellen.', false),
	new Question('Die Netzhaut des Auges enthält Stäbchen für das Schwarz/Weiß-Sehen und 3 Zapfenarten für das Farbsehen.', true),
	new Question('Rot-grün-blinde Personen sehen nur die Farben Rot und Grün.', false),
	new Question('Licht mit höherer Frequenz hat eine kleinere Wellenlänge.', true),
	new Question('Die Purpurlinie des CIE Chromaticitydiagramms enthält spektralreine Farben.', false),
	new Question('Drucker verwenden das CMYK Farbmodell.', true),
	new Question('Licht mit niedrigerer Frequenz hat eine kleinere Wellenlänge.', false),
	new Question('Beim CMYK-Farbmodell steht K für „Key“ und entspricht der Farbe schwarz.', true),
	new Question('Das RGB Farbmodell basiert auf den Prinzip der subtraktiven Farbmischung.', false),
	new Question('Das RGB Farbmodell kommt z.B. bei Monitoren zum Einsatz und weist jeder Farbe eine Koordinate zu, wobei [0, 0, 0] schwarz entspricht.', true),
	new Question('Das CIE 1931 XYZ Farbmodell umfasst auch jene Farben, die der Mensch nicht sehen kann.', true),
	new Question('Die Farbmodelle HSV und HLS sind intuitivere Modelle, bei denen sich eine Farbkoordinate prinzipiell aus Werten für den Farbton, die Sättigung und Helligkeit zusammensetzt.', true),
	new Question('Der Raum der darstellbaren Farben eines Gerätes heißt Gamut.', true),
	new Question('MPEG benötigt mehr Rechenzeit zum Codieren als zum Decodieren.', true),
	new Question('Der benötige Speicherplatz von JPEG-Dateien ist abhängig vom Bildinhalt.', true),
	new Question('Verktorgrafiken zoomen verlustlos.', true),
	new Question('Lauflängenkodierung halbiert den Speicherbedarf maximal.', false),
	new Question('Bei der Lauflängenkodierung eines Bildes kann es auch zu einer Vergrößerung des benötigten Speicherplatzes kommen.', true),
	new Question('JPEG kombiniert verlustbehaftete und verlustfreie Kompressionsmethoden.', true),
	new Question('Bei der JPEG Komprimierung werden niedrige Bildfrequenzen stärker komprimiert als hohe Bildfrequenzen.', false),
	new Question('Bei einer B-Rep wird nur die Oberfläche der Objekte beschrieben.', true),
	new Question('CSG-Objekte werden durch die Operatoren Vereinigung, Durchschnitt und Mengendifferenz beschrieben.', true),
	new Question('Der einzige Weg um CSG Objekte zu zeichnen ist sie in BRep Objekte umzurechnen.', false),
	new Question('Ein Szenengraph ist eine genormte Datenstruktur zum Austausch geometrischer Daten.', false),
	new Question('Die Genauigkeit der Objektdarstellung in Quad- und Octrees ist generell abhängig von der Baumtiefe.', true),
	new Question('Octrees erlauben ein schnelles Durchsuchen bestimmter räumlicher Positionen eines Objektes.', true),
	new Question('Durch die hierarchische Objektdarstellung von Octrees lassen sich einzelne Teile im Octree sehr einfach transformieren.', false),
	new Question('In einem Octree hat jeder Knoten mindestens acht Subknoten.', false),
	new Question('Da bei CSG alle Primitive konsistent sind (keine Löcher aufweisen) und die Operatoren aus konsistenten Teilen nur konsistent Objekte erzeugen, sind bei CSG alle Objekte immer konsistent.', true),
	new Question('CSG Objekte erlauben eine exakte Repräsentation von Objektoberflächen, haben jedoch einen höheren Speicherbedarf.', false),
	new Question('CSG Objekte stellen einen hierarchischen Aufbau eines Objektes durch Verknüpfung einfacher geometrischer Formen dar.', true),
	new Question('Die Matrix-Schreibweise hat den Vorteil, dass durch Kombination von Grundmatrizen komplexe Transformationen mit nur einer Matrix dargestellt werden können.', true),
	new Question('Für einen homogenen 2D Punkt (x,y,h) berechnet sich die tatsächliche x-Koordinate x‘ durch x‘=h/x.', false),
	new Question('Polygon Meshes können als Ganzes transformiert werden, indem man jeden Punkt (Bildpunkt, 3D-Punkt) mit einer Matrix transformiert.', true),
	new Question('Mittels 3x3 Matrizen lassen sich alle geometrischen Transformationen von 3D Objekten darstellen.', false),
	new Question('T(x,y,z) = T(x,y,z)^-1.', false),
	new Question('S(4,4,4) * S(5,5,5) = S(20,20,20).', true),
	new Question('S(x,y,z)^-1 = S(1/x,1/y,1/z).', true),
	new Question('Die Viewport Transformation wandelt Kamerakoordinaten in Pixelkoordinaten um.', false),
	new Question('Bei der perspektivischen Projektion bleiben die Tiefenwerte von Punkten erhalten.', false),
	new Question('Bei der perspektivischen Projektion bleibt die relative Ordnung der Tiefenwerte von Punkten erhalten.', true),
	new Question('Pixel mit dem gleichen Grauwert können nach einer Histogrammequalisierung unterschiedliche Grauwerte aufweisen.', false),
	new Question('Der Wert eines Histogramm-Bins kann die Anzahl der Pixel des Bildes übersteigen.', false),
	new Question('Die Bildinvertierung kann mit einer einzigen Faltung des Bildes mit einem geeigneten Filter bewerkstelligt werden.', false),
	new Question('Die Schwellwertoperation kann mit einer einzigen Faltung des Bildes mit einem geeigneten Filter bewerkstelligt werden.', false),
	new Question('Der Median-Filter ist ein linearer Filter.', false),
	new Question('Ein zweidimensionaler Mittelwertfilter kann in zwei eindimensionale Filter geteilt werden, die nacheinander auf das Bild angewendet werden.', true),
	new Question('Gradienten sind invariant zu Bildrotationen.', false),
	new Question('Bei Kantendetektoren, die auf der 1. Ableitung beruhen, werden Kanten durch Nulldurchgänge in der 1. Ableitung detektiert.', false),
	new Question('Bei der Fourier-Transformation werden tiefe Bildfrequenzen unterdrückt.', false),
	new Question('Mittels der Hough-Transformation können neben Linien auch andere geometrische Strukturen detektiert werden.', true),
	new Question('Bei der Hough Transformation zur Liniendetektion besteht das Akkumulator Array (Hough Raum) aus einer Dimension.', false),
	new Question('Im Fourierspektrum liegen die hohen Frequenzen näher am Rand als die tiefen Frequenzen.', true)
];

//######################################################################################################################################################

var fragenTest2 = [
	new Question('Globale Operationen: Bei der Fourier-Transformation werden tiefe Bildfrequenzen unterdrückt.', false),
	new Question('Globale Operationen: Mittels der Hough-Transformation können neben Linien auch andere geometrische Strukturen detektiert werden.', true),
	new Question('Globale Operationen: Bei der Hough Transformation zur Liniendetektion besteht das Akkumulator Array (Hough Raum) aus einer Dimension.', false),
	new Question('Globale Operationen: Dynamische/Adaptive Schwellwertverfahren verwenden einen globalen Schwellwert.', false),
	new Question('Bildmerkmale – Image Features: Der Harris-Eckendetektor ist im Gegensatz zum Moravec-Eckendetektor skalierungsinvariant.', false),
	new Question('Bildmerkmale – Image Features: Ein Detektor für Interest Points sollte möglichst skalierungs-, rotations- und translationsinvariant sein.', true),
	new Question('Bildmerkmale – Image Features: SIFT Features können beispielsweise bei der Erstellung eines Bildmosaiks verwendet werden.', true),
	new Question('Stereo und Motion: Beim regionenbasierten Matching (Area-Based-Matching) werden keine Interest Points benötigt.', true),
	new Question('Stereo und Motion: Die Disparität ist kleiner, je weiter entfernt der Szenenpunkt liegt.', true),
	new Question('Stereo und Motion: Die fokale Länge der beiden Kameras hat keinen Einfluss auf die Disparität.', false),
	new Question('Stereo und Motion: Die Epipole sind nur durch die Lage der beiden Kameras zueinander bestimmt, nicht durch die Szenengeometrie.', true),
	new Question('Clipping und Antialiasing: Für das Antialiasing von Linien wird oft die Farbintensität eines Pixels proportional zum Überdeckungsgrad der Pixelfläche durch eine Linie gewählt.', true),
	new Question('Clipping und Antialiasing: Aliasing entsteht durch eine zu geringe Abtastung eines Signals.', true),
	new Question('Clipping und Antialiasing: Supersampling ist eine geeignete Methode, um Aliasing eines gegebenen Rasterbildes nachträglich zu verringern.', false),
	new Question('Clipping und Antialiasing: Damit ein Signal korrekt rekonstruiert werden kann, muss es mindestens mit der höchsten Informationsfrequenz abgetastet werden (Nyquist-Limit)', false),
	new Question('Clipping und Antialiasing: Unter Antialiasing versteht man die Reduktion unerwünschter Aliasing-Artefakte', true),
	new Question('Clipping und Antialiasing: Eine zu Geringe Auflösung bei der Rasterisierung kann zu Aliasing-Artefakten führen.', true),
	new Question('Clipping und Antialiasing: Ist die Abtastfrquenz niedriger als das Nyquist-Limit, so kann die Information des abgetasteten Signals korrekt rekonstruiert werden.', false),
	new Question('Clipping und Antialiasing: Numerische Fehler können zu Aliasing-Artefakten führen.', true),
	new Question('Clipping und Antialiasing: Aliasing-Artefakte sind Fehler, die bei der Umwandlung (Diskretisierung) von digitalen in analoge Informationen auftreten können', false),
	new Question('Sichtbarkeitsverfahren: Mittels Backface-Culling können alle nicht sichtbaren Polygone einer Szene entfernt werden (meistens etwa 50%)', false),
	new Question('Sichtbarkeitsverfahren: Mittels Backface-Culling können im Schnitt etwa die Hälfte aller Polygone einer Szene als unsichtbar identifiziert werden.', true),
	new Question('Sichtbarkeitsverfahren: Beim Backface-Culling wird ein Polygon entfernt, wenn sein Oberflächenvektor vom Betrachter weg zeigt.', true),
	new Question('Sichtbarkeitsverfahren: Der Z-Puffer speichert für jedes Pixel stets die Tiefe des am fernsten liegenden Polygons, das diesen Pixel überdeckt.', false),
	new Question('Sichtbarkeitsverfahren: Beim Z-Buffering wird im Framebuffer ein Pixel eines Polygons nur gezeichnet, wenn sein Z-Wert näher zum Betrachter liegt als der im Puffer gespeicherte Wert.', true),
	new Question('Beleuchtung und Schattierung: Bei diffuser Beleuchtung ist die beobachtete Helligkeit abhängig vom Blickwinkel auf die Oberfläche.', false),
	new Question('Beleuchtung und Schattierung: Laut Lambert\'schen Gesetz ist eine Oberfläche dort am hellsten, wo das Licht orthogonal auf die Oberfläche auftrifft.', true),
	new Question('Beleuchtung und Schattierung: Bei der Gourard-Schattierung wird die tatsächliche Beleuchtungsberechnung nur für die Eckpunkte des Polygons durchgeführt.', true),
	new Question('Beleuchtung und Schattierung: Je kleiner der Cosinus-Exponent im Phong-Beleuchtungsmodell, desto rauer wirkt die Oberfläche.', true),
	new Question('Beleuchtung und Schattierung: Die Phong-Schattierung erlaubt es, für jedes Polygonpixel individuell die Beleuchtung zu berechnen.', true),
	new Question('Beleuchtung und Schattierung: Der Nachteil der Phongschattierung ist das etwaige Auftreten des Mach-Band-Effekts.', false),
	new Question('Ray-Tracing: Ein Nachteil von Ray-Casting ist der hohe Speicherbedarf, der durch die vielen Rays (mehrere Millionen!) entsteht.', false),
	new Question('Ray-Tracing: Beim Ray-Casting wird durch jedes Pixel ein Strahl in Blickrichtung in die Szene gelegt und mit allen Objekten geschnitten.', true),
	new Question('Ray-Tracing: Bei der Path-Tracing Methode werden Lichtstrahlen nicht vom Licht aus sondern vom Betrachter aus verfolgt.', false),
	new Question('Globale Beleuchtung, Radiosity: Die Radiosity-Methode eignet sich sehr gut dazu, Spiegelungen und Schlagschatten zu berechnen', false),
	new Question('Globale Beleuchtung, Radiosity: Ein Formfaktor gibt die Größe der energieabstrahlenden Fläche eines Patches an', false),
	new Question('Globale Beleuchtung, Radiosity: Beim Progressive Refinement wird zuerst die Energie des hellsten Patches auf alle anderen verteilt, dann die des zweithellsten usw.', true),
	new Question('Globale Beleuchtung, Radiosity: In der Fachsprache wird für „Globale Beleuchtung“ oft der englische Ausdruck Radiosity verwendet.', true),
	new Question('Globale Beleuchtung, Radiosity: Die Radiosity Methode eignet sich nicht dazu, Objekte mit diffusem und spiegelnden Oberflächen darzustellen.', true),
	new Question('Globale Beleuchtung, Radiosity: Beim Southwell-Verfahren (Shooting-Verfahren) wird in einem Schritt die Energie des hellsten Patches auf alle anderen verteilt, weshalb es schneller konvergiert als das Gauß-Seidel Verfahren.', true)
];