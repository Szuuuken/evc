not_asked_questions_first_test = new Array();
not_asked_questions_second_test = new Array();
asked_quenstions = new Array();
not_asked_questions = new Array();
correct_answerd_questions_count = 0;
incorrect_answerd_questions_count = 0;
right_wrong_keyboard_actions_allowed = false;
next_question_keyboard_action_allowed = false;

current_question = null;

function Question(question,is_correct){
	this.question = question;
	this.is_correct = is_correct;
}

function create_first_test_questeion(question, is_correct){
	not_asked_questions_first_test.push({
								question : question,
								is_correct : is_correct
							});
}

not_asked_questions_first_test.push(new Question("Bei einem Color Filter Array wird für jedes Pixel entweder der rote, grüne oder blaue Farbanteil gemessen.",true));
not_asked_questions_first_test.push(new Question("Die sphärische Aberration führt zu Farbverfälschungen im Bild.", false));
not_asked_questions_first_test.push(new Question("Je größer die Brennweite, desto kleiner erscheinen Objekte im Bild.", false));
not_asked_questions_first_test.push(new Question("Die Brennweite hat einen Einfluss auf den Tiefenschärfebereich.", true));
not_asked_questions_first_test.push(new Question("256 ist eine mögliche radiometrische Auflösung eines digitalen Bildes.", true));
not_asked_questions_first_test.push(new Question("Nach der Korrektur einer geometrischen Linsenverzerrung erscheinen gerade Kanten im Bild ebenfalls gerade.", true));
not_asked_questions_first_test.push(new Question("Die plenoptische Funktion hat mehrere Ausgabeparameter, aber nur einen Eingabeparameter.", false));
not_asked_questions_first_test.push(new Question("Farbe wird bei der plenoptischen Funktion nicht berücksichtigt.", false));
not_asked_questions_first_test.push(new Question("Camera Obscura: Weiter entfernte Objekte erscheinen größer auf der Projektion.", false));
not_asked_questions_first_test.push(new Question("Das Loch (die Blende) sollte für eine optimale Abbildung so klein wie möglich gewählt werden.", false));
not_asked_questions_first_test.push(new Question("Eine zu große Blende führt zu einem unscharfen Bild.", true));
not_asked_questions_first_test.push(new Question("Camera Obscura: Die projiziert Bilder sind schwarz-weiß, die Farbinformation geht verloren.", false));
not_asked_questions_first_test.push(new Question("Verschiedene Lichtspektren können den gleichen Farbeindruck erzeugen.", true));
not_asked_questions_first_test.push(new Question("HSV schwarz ist wenn S=0.", false));
not_asked_questions_first_test.push(new Question("RGB kann alle menschlich wahrnehmbaren Farben darstellen.", false));
not_asked_questions_first_test.push(new Question("Die Netzhaut des Auges enthält Stäbchen für das Schwarz/Weiß-Sehen und 3 Zapfenarten für das Farbsehen.", true));
not_asked_questions_first_test.push(new Question("Rot-grün-blinde Personen sehen nur die Farben Rot und Grün.", false));
not_asked_questions_first_test.push(new Question("Licht mit höherer Frequenz hat eine kleinere Wellenlänge.", true));
not_asked_questions_first_test.push(new Question("Die Purpurlinie des CIE Chromaticitydiagramms enthält spektralreine Farben.", false));
not_asked_questions_first_test.push(new Question("Drucker verwenden das CMYK Farbmodell.", true));
not_asked_questions_first_test.push(new Question("Licht mit niedrigerer Frequenz hat eine kleinere Wellenlänge.", false));
not_asked_questions_first_test.push(new Question("Beim CMYK-Farbmodell steht K für „Key“ und entspricht der Farbe schwarz.", true));
not_asked_questions_first_test.push(new Question("Das RGB Farbmodell basiert auf den Prinzip der subtraktiven Farbmischung.", false));
not_asked_questions_first_test.push(new Question("Das RGB Farbmodell kommt z.B. bei Monitoren zum Einsatz und weist jeder Farbe eine Koordinate zu, wobei [0, 0, 0] schwarz entspricht.", true));
not_asked_questions_first_test.push(new Question("Das CIE 1931 XYZ Farbmodell umfasst auch jene Farben, die der Mensch nicht sehen kann.", true));
not_asked_questions_first_test.push(new Question("Die Farbmodelle HSV und HLS sind intuitivere Modelle, bei denen sich eine Farbkoordinate prinzipiell aus Werten für den Farbton, die Sättigung und Helligkeit zusammensetzt.", true));
not_asked_questions_first_test.push(new Question("Der Raum der darstellbaren Farben eines Gerätes heißt Gamut.", true));
not_asked_questions_first_test.push(new Question("MPEG benoetigt mehr Rechenzeit zum Codieren als zum Decodieren.", true));
not_asked_questions_first_test.push(new Question("Der benötige Speicherplatz von JPEG-Dateien ist abhängig vom Bildinhalt.", true));
not_asked_questions_first_test.push(new Question("Verktorgrafiken zoomen verlustlos.", true));
not_asked_questions_first_test.push(new Question("Lauflängenkodierung halbiert den Speicherbedarf maximal.", false));
not_asked_questions_first_test.push(new Question("Bei der Lauflängenkodierung eines Bildes kann es auch zu einer Vergrößerung des benötigten Speicherplatzes kommen.", true));
not_asked_questions_first_test.push(new Question("JPEG kombiniert verlustbehaftete und verlustfreie Kompressionsmethoden.", true));
not_asked_questions_first_test.push(new Question("Bei der JPEG Komprimierung werden niedrige Bildfrequenzen stärker komprimiert als hohe Bildfrequenzen.", false));
not_asked_questions_first_test.push(new Question("Bei einer B-Rep wird nur die Oberfläche der Objekte beschrieben.", true));
not_asked_questions_first_test.push(new Question("CSG-Objekte werden durch die Operatoren Vereinigung, Durchschnitt und Mengendifferenz beschrieben.", true));
not_asked_questions_first_test.push(new Question("Der einzige Weg um CSG Objekte zu zeichnen ist sie in BRep Objekte umzurechnen.", false));
not_asked_questions_first_test.push(new Question("Ein Szenengraph ist eine genormte Datenstruktur zum Austausch geometrischer Daten.", false));
not_asked_questions_first_test.push(new Question("Die Genauigkeit der Objektdarstellung in Quad- und Octrees ist generell abhängig von der Baumtiefe.", true));
not_asked_questions_first_test.push(new Question("Octrees erlauben ein schnelles Durchsuchen bestimmter räumlicher Positionen eines Objektes.", true));
not_asked_questions_first_test.push(new Question("Durch die hierarchische Objektdarstellung von Octrees lassen sich einzelne Teile im Octree sehr einfach transformieren.", false));
not_asked_questions_first_test.push(new Question("In einem Octree hat jeder Knoten mindestens acht Subknoten.", false));
not_asked_questions_first_test.push(new Question("Da bei CSG alle Primitive konsistent sind (keine Löcher aufweisen) und die Operatoren aus konsistenten Teilen nur konsistent Objekte erzeugen, sind bei CSG alle Objekte immer konsistent.", true));
not_asked_questions_first_test.push(new Question("CSG Objekte erlauben eine exakte Repräsentation von Objektoberflächen, haben jedoch einen höheren Speicherbedarf.", false));
not_asked_questions_first_test.push(new Question("CSG Objekte stellen einen hierarchischen Aufbau eines Objektes durch Verknüpfung einfacher geometrischer Formen dar.", true));
not_asked_questions_first_test.push(new Question("Die Matrix-Schreibweise hat den Vorteil, dass durch Kombination von Grundmatrizen komplexe Transformationen mit nur einer Matrix dargestellt werden können.", true));
not_asked_questions_first_test.push(new Question("Für einen homogenen 2D Punkt (x,y,h) berechnet sich die tatsächliche x-Koordinate x‘ durch x‘=h/x.", false));
not_asked_questions_first_test.push(new Question("Polygon Meshes können als Ganzes transformiert werden, indem man jeden Punkt (Bildpunkt, 3D-Punkt) mit einer Matrix transformiert.", true));
not_asked_questions_first_test.push(new Question("Mittels 3x3 Matrizen lassen sich alle geometrischen Transformationen von 3D Objekten darstellen.", false));
not_asked_questions_first_test.push(new Question("T(x,y,z) = T(x,y,z)^-1.", false));
not_asked_questions_first_test.push(new Question("S(4,4,4) * S(5,5,5) = S(20,20,20).", true));
not_asked_questions_first_test.push(new Question("S(x,y,z)^-1 = S(1/x,1/y,1/z).", true));
not_asked_questions_first_test.push(new Question("Die Viewport Transformation wandelt Kamerakoordinaten in Pixelkoordinaten um.", false));
not_asked_questions_first_test.push(new Question("Bei der perspektivischen Projektion bleiben die Tiefenwerte von Punkten erhalten.", false));
not_asked_questions_first_test.push(new Question("Bei der perspektivischen Projektion bleibt die relative Ordnung der Tiefenwerte von Punkten erhalten.", true));
not_asked_questions_first_test.push(new Question("Pixel mit dem gleichen Grauwert können nach einer Histogrammequalisierung unterschiedliche Grauwerte aufweisen.", false));
not_asked_questions_first_test.push(new Question("Der Wert eines Histogramm-Bins kann die Anzahl der Pixel des Bildes übersteigen.", true));
not_asked_questions_first_test.push(new Question("Die Bildinvertierung kann mit einer einzigen Faltung des Bildes mit einem geeigneten Filter bewerkstelligt werden.", false));
not_asked_questions_first_test.push(new Question("Die Schwellwertoperation kann mit einer einzigen Faltung des Bildes mit einem geeigneten Filter bewerkstelligt werden.", false));
not_asked_questions_first_test.push(new Question("Der Median-Filter ist ein linearer Filter.", false));
not_asked_questions_first_test.push(new Question("Ein zweidimensionaler Mittelwertfilter kann in zwei eindimensionale Filter geteilt werden, die nacheinander auf das Bild angewendet werden.", true));
not_asked_questions_first_test.push(new Question("Gradienten sind invariant zu Bildrotationen.", false));
not_asked_questions_first_test.push(new Question("Bei Kantendetektoren, die auf der 1. Ableitung beruhen, werden Kanten durch Nulldurchgänge in der 1. Ableitung detektiert.", false));
not_asked_questions_first_test.push(new Question("Bei der Fourier-Transformation werden tiefe Bildfrequenzen unterdrückt.", false));
not_asked_questions_first_test.push(new Question("Mittels der Hough-Transformation können neben Linien auch andere geometrische Strukturen detektiert werden.", true));
not_asked_questions_first_test.push(new Question("Bei der Hough Transformation zur Liniendetektion besteht das Akkumulator Array (Hough Raum) aus einer Dimension.", false));
not_asked_questions_first_test.push(new Question("Im Fourierspektrum liegen die hohen Frequenzen näher am Rand als die tiefen Frequenzen.", true));

//######################################################################################################################################################

not_asked_questions_second_test.push(new Question("Globale Operationen: Bei der Fourier-Transformation werden tiefe Bildfrequenzen unterdrückt.",false));
not_asked_questions_second_test.push(new Question("Globale Operationen: Mittels der Hough-Transformation können neben Linien auch andere geometrische Strukturen detektiert werden.",true));
not_asked_questions_second_test.push(new Question("Globale Operationen: Bei der Hough Transformation zur Liniendetektion besteht das Akkumulator Array (Hough Raum) aus einer Dimension.",false));
not_asked_questions_second_test.push(new Question("Globale Operationen: Dynamische/Adaptive Schwellwertverfahren verwenden einen globalen Schwellwert.",false));
not_asked_questions_second_test.push(new Question("Bildmerkmale – Image Features: Der Harris-Eckendetektor ist im Gegensatz zum Moravec-Eckendetektor skalierungsinvariant.",false));
not_asked_questions_second_test.push(new Question("Bildmerkmale – Image Features: Ein Detektor für Interest Points sollte möglichst skalierungs-, rotations- und translationsinvariant sein.",true));
not_asked_questions_second_test.push(new Question("Bildmerkmale – Image Features: SIFT Features können beispielsweise bei der Erstellung eines Bildmosaiks verwendet werden.",true));
not_asked_questions_second_test.push(new Question("Stereo und Motion: Beim regionenbasierten Matching (Area-Based-Matching) werden keine Interest Points benötigt.",true));
not_asked_questions_second_test.push(new Question("Stereo und Motion: Die Disparität ist kleiner, je weiter entfernt der Szenenpunkt liegt.",true));
not_asked_questions_second_test.push(new Question("Stereo und Motion: Die fokale Länge der beiden Kameras hat keinen Einfluss auf die Disparität.",false));
not_asked_questions_second_test.push(new Question("Stereo und Motion: Die Epipole sind nur durch die Lage der beiden Kameras zueinander bestimmt, nicht durch die Szenengeometrie.",true));
not_asked_questions_second_test.push(new Question("Clipping und Antialiasing: Für das Antialiasing von Linien wird oft die Farbintensität eines Pixels proportional zum Überdeckungsgrad der Pixelfläche durch eine Linie gewählt.",true));
not_asked_questions_second_test.push(new Question("Clipping und Antialiasing: Aliasing entsteht durch eine zu geringe Abtastung eines Signals.",true));
not_asked_questions_second_test.push(new Question("Clipping und Antialiasing: Supersampling ist eine geeignete Methode, um Aliasing eines gegebenen Rasterbildes nachträglich zu verringern.",false));
not_asked_questions_second_test.push(new Question("Clipping und Antialiasing: Damit ein Signal korrekt rekonstruiert werden kann, muss es mindestens mit der höchsten Informationsfrequenz abgetastet werden (Nyquist-Limit)",false));
not_asked_questions_second_test.push(new Question("Clipping und Antialiasing: Unter Antialiasing versteht man die Reduktion unerwünschter Aliasing-Artefakte",true));
not_asked_questions_second_test.push(new Question("Clipping und Antialiasing: Eine zu Geringe Auflösung bei der Rasterisierung kann zu Aliasing-Artefakten führen.",true));
not_asked_questions_second_test.push(new Question("Clipping und Antialiasing: Ist die Abtastfrquenz niedriger als das Nyquist-Limit, so kann die Information des abgetasteten Signals korrekt rekonstruiert werden.",false));
not_asked_questions_second_test.push(new Question("Clipping und Antialiasing: Numerische Fehler können zu Aliasing-Artefakten führen.",true));
not_asked_questions_second_test.push(new Question("Clipping und Antialiasing: Aliasing-Artefakte sind Fehler, die bei der Umwandlung (Diskretisierung) von digitalen in analoge Informationen auftreten können",false));
not_asked_questions_second_test.push(new Question("Sichtbarkeitsverfahren: Mittels Backface-Culling können alle nicht sichtbaren Polygone einer Szene entfernt werden (meistens etwa 50%)",false));
not_asked_questions_second_test.push(new Question("Sichtbarkeitsverfahren: Mittels Backface-Culling können im Schnitt etwa die Hälfte aller Polygone einer Szene als unsichtbar identifiziert werden.",true));
not_asked_questions_second_test.push(new Question("Sichtbarkeitsverfahren: Beim Backface-Culling wird ein Polygon entfernt, wenn sein Oberflächenvektor vom Betrachter weg zeigt.",true));
not_asked_questions_second_test.push(new Question("Sichtbarkeitsverfahren: Der Z-Puffer speichert für jedes Pixel stets die Tiefe des am fernsten liegenden Polygons, das diesen Pixel überdeckt.",false));
not_asked_questions_second_test.push(new Question("Sichtbarkeitsverfahren: Beim Z-Buffering wird im Framebuffer ein Pixel eines Polygons nur gezeichnet, wenn sein Z-Wert näher zum Betrachter liegt als der im Puffer gespeicherte Wert.",true));
not_asked_questions_second_test.push(new Question("Beleuchtung und Schattierung: Bei diffuser Beleuchtung ist die beobachtete Helligkeit abhängig vom Blickwinkel auf die Oberfläche.",false));
not_asked_questions_second_test.push(new Question("Beleuchtung und Schattierung: Laut Lambert'schen Gesetz ist eine Oberfläche dort am hellsten, wo das Licht orthogonal auf die Oberfläche auftrifft.",true));
not_asked_questions_second_test.push(new Question("Beleuchtung und Schattierung: Bei der Gourard-Schattierung wird die tatsächliche Beleuchtungsberechnung nur für die Eckpunkte des Polygons durchgeführt.",true));
not_asked_questions_second_test.push(new Question("Beleuchtung und Schattierung: Je kleiner der Cosinus-Exponent im Phong-Beleuchtungsmodell, desto rauher wirkt die Oberfläche.",true));
not_asked_questions_second_test.push(new Question("Beleuchtung und Schattierung: Die Phong-Schattierung erlaubt es, für jedes Polygonpixel individuell die Beleuchtung zu berechnen.",true));
not_asked_questions_second_test.push(new Question("Beleuchtung und Schattierung: Der Nachteil der Phongschattierung ist das etwaige Auftreten des Mach-Band-Effekts.",false));
not_asked_questions_second_test.push(new Question("Ray-Tracing: Ein Nachteil von Ray-Casting ist der hohe Speicherbedarf, der durch die vielen Rays (mehrere Millionen!) entsteht.",false));
not_asked_questions_second_test.push(new Question("Ray-Tracing: Beim Ray-Casting wird durch jedes Pixel ein Strahl in Blickrichtung in die Szene gelegt und mit allen Objekten geschnitten.",true));
not_asked_questions_second_test.push(new Question("Ray-Tracing: Bei der Path-Tracing Methode werden Lichtstrahlen nicht vom Licht aus sondern vom Betrachter aus verfolgt.",false));
not_asked_questions_second_test.push(new Question("Globale Beleuchtung, Radiosity: Die Radiosity-Methode eignet sich sehr gut dazu, Spiegelungen und Schlagschatten zu berechnen",true));
not_asked_questions_second_test.push(new Question("Globale Beleuchtung, Radiosity: Ein Formfaktor gibt die Größe der energieabstrahlenden Fläche eines Patches an",true));
not_asked_questions_second_test.push(new Question("Globale Beleuchtung, Radiosity: Beim Progressive Refinement wird zuerst die Energie des Hellsten Patches auf alle anderen verteilt, dann die zweithellsten usw",false));
not_asked_questions_second_test.push(new Question("Globale Beleuchtung, Radiosity: In der Fachsprache wird für „Globale Beleuchtung“ oft der englische Ausdruck Radiosity verwendet.",true));
not_asked_questions_second_test.push(new Question("Globale Beleuchtung, Radiosity: Die Radiosity Methode eignet sich nicht dazu, Objekte mit diffusem und spiegelnden Oberflächen darzustellen.",false));
not_asked_questions_second_test.push(new Question("Globale Beleuchtung, Radiosity: Beim Southwell-Verfahren (Shooting-Verfahren) wird in einem Schritt die Energie des hellsten Patches auf alle anderen verteilt, weshalb es schneller konvergiert als das Gauß-Seidel Verfahren.",true));