# 🎮 TACO NAZO - Videojuego de Armar Tacos

## 📖 Descripción del Videojuego

**TACO NAZO** es un videojuego de estilo pixel art donde los jugadores deben armar tacos siguiendo órdenes de clientes. El objetivo es crear el taco perfecto combinando los ingredientes correctos en el orden adecuado para satisfacer a los clientes y ganar puntos.

## 🎯 Mecánica del Juego

### Objetivo Principal
- Los clientes llegan con órdenes específicas de tacos
- El jugador debe seleccionar y colocar los ingredientes en el orden correcto
- Cada taco correcto otorga puntos y monedas
- El juego tiene niveles con dificultad creciente

### Sistema de Puntuación
- **Taco Perfecto**: +100 puntos (todos los ingredientes correctos y en orden)
- **Taco Bueno**: +50 puntos (ingredientes correctos pero orden incorrecto)
- **Taco Regular**: +25 puntos (faltan algunos ingredientes)
- **Taco Malo**: -10 puntos (ingredientes incorrectos)

### Sistema de Monedas
- Cada taco correcto otorga monedas
- Las monedas se pueden usar para desbloquear nuevos ingredientes y recetas

## 🎨 Estilo Visual: Pixel Art

El juego utiliza un estilo pixel art retro con:
- Resolución: 16x16, 32x32 y 64x64 píxeles
- Paleta de colores: Vibrante y colorida
- Estilo: Retro mexicano con toques modernos

## 📦 Imágenes PNG Requeridas (Pixel Art)

### 🍽️ Ingredientes (32x32 px)

#### 1. **tortilla.png** - Tortilla de Maíz Base
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada en el canvas
- **Fondo**: Transparente (PNG con alpha)
- **Estilo**: Vista superior circular de la tortilla
- **Colores**: Amarillo dorado (#F4D03F) con bordes ligeramente tostados (#D68910)
- **Detalles**: 
  - Forma circular perfecta
  - Textura ligeramente rugosa con píxeles que simulan granos de maíz
  - Borde más oscuro para dar profundidad
  - Sin sombras, estilo plano pixel art
  - Debe verse como si estuviera sobre una superficie plana

#### 2. **carne-pastor.png** - Carne al Pastor Cocida
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, ligeramente apilada
- **Fondo**: Transparente
- **Estilo**: Carne cortada en pequeños trozos apilados
- **Colores**: 
  - Carne principal: Marrón rojizo (#A04000)
  - Partes cocidas: Marrón oscuro (#6E2C00)
  - Especias: Puntos rojos (#C0392B) y amarillos (#F39C12)
- **Detalles**:
  - Forma irregular de trozos apilados
  - Píxeles que sugieren textura de carne cocida
  - Pequeños puntos de color que representan especias (achiote, chile)
  - Sin fondo, solo la carne visible

#### 3. **carne-asada.png** - Carne Asada
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, forma de tira/banda
- **Fondo**: Transparente
- **Estilo**: Tira de carne asada con marcas de parrilla
- **Colores**:
  - Carne: Marrón medio (#8B4513)
  - Marcas de parrilla: Líneas negras (#1C1C1C) y marrones oscuros (#5D4037)
  - Partes más cocidas: Marrón claro (#A0522D)
- **Detalles**:
  - Forma rectangular/ovalada
  - Líneas horizontales que simulan marcas de parrilla
  - Textura que sugiere fibra de carne
  - Bordes ligeramente irregulares

#### 4. **carne-carnitas.png** - Carnitas
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, forma de cubos/trozos
- **Fondo**: Transparente
- **Estilo**: Trozos de carne de cerdo deshebrada
- **Colores**:
  - Carne: Marrón dorado (#D4A574)
  - Partes más oscuras: Marrón (#8B6F47)
  - Brillos: Amarillo claro (#F4E4BC)
- **Detalles**:
  - Forma de pequeños trozos irregulares
  - Textura que sugiere carne deshebrada
  - Algunos píxeles más claros para dar efecto de grasa/jugo
  - Apariencia jugosa y dorada

#### 5. **carne-barbacoa.png** - Barbacoa
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, forma de montículo
- **Fondo**: Transparente
- **Estilo**: Carne cocida lentamente, suave y desmenuzada
- **Colores**:
  - Carne: Marrón oscuro (#6B4423)
  - Partes más claras: Marrón (#8B4513)
  - Salsa: Rojo oscuro (#8B0000)
- **Detalles**:
  - Forma de montículo suave
  - Textura más suave que otras carnes
  - Píxeles que sugieren salsa mezclada
  - Apariencia húmeda y jugosa

#### 6. **pescado.png** - Pescado para Taco
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, forma de filete
- **Fondo**: Transparente
- **Estilo**: Filete de pescado empanizado y frito
- **Colores**:
  - Empanizado: Dorado (#F4D03F)
  - Pescado: Blanco (#F8F9FA) con tonos rosados (#FFB6C1)
  - Partes fritas: Marrón dorado (#D68910)
- **Detalles**:
  - Forma de filete rectangular/ovalado
  - Textura crujiente sugerida con píxeles
  - Borde dorado que representa el empanizado frito
  - Algunos píxeles más oscuros para textura

#### 7. **chorizo.png** - Chorizo
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, forma de pequeños trozos
- **Fondo**: Transparente
- **Estilo**: Chorizo cocido en pequeños trozos
- **Colores**:
  - Chorizo: Rojo intenso (#C0392B)
  - Partes cocidas: Marrón rojizo (#922B21)
  - Especias: Puntos negros (#1C1C1C) y rojos oscuros (#7B241C)
- **Detalles**:
  - Forma de pequeños trozos irregulares
  - Color rojo vibrante característico
  - Puntos que representan especias y grasa
  - Textura granulada

#### 8. **lechuga.png** - Lechuga Picada
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, forma de hojas picadas
- **Fondo**: Transparente
- **Estilo**: Hojas de lechuga picadas en tiras
- **Colores**:
  - Verde claro: (#85C1E2) - partes más claras
  - Verde medio: (#52BE80) - color principal
  - Verde oscuro: (#27AE60) - venas y bordes
- **Detalles**:
  - Forma de pequeñas tiras/hojas irregulares
  - Textura de hojas con venas sugeridas
  - Bordes ondulados característicos de la lechuga
  - Apariencia fresca y crujiente

#### 9. **cebolla.png** - Cebolla en Rodajas
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, forma circular con anillos
- **Fondo**: Transparente
- **Estilo**: Rodajas de cebolla blanca/morada
- **Colores**:
  - Cebolla blanca: Blanco (#FFFFFF) con tonos morados claros (#E8DAEF)
  - Anillos: Morado claro (#BB8FCE)
  - Borde: Morado (#9B59B6)
- **Detalles**:
  - Forma circular con anillos concéntricos
  - Anillos visibles que caracterizan la cebolla
  - Borde más oscuro
  - Algunos píxeles translúcidos sugeridos

#### 10. **cilantro.png** - Cilantro Fresco
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, forma de hojas pequeñas
- **Fondo**: Transparente
- **Estilo**: Hojas pequeñas de cilantro
- **Colores**:
  - Verde brillante: (#2ECC71) - color principal
  - Verde oscuro: (#27AE60) - tallos y venas
  - Verde claro: (#58D68D) - partes más claras
- **Detalles**:
  - Forma de pequeñas hojas dentadas
  - Múltiples hojitas agrupadas
  - Tallos delgados visibles
  - Apariencia muy fresca y verde

#### 11. **queso.png** - Queso Rallado
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, forma de pequeños trozos
- **Fondo**: Transparente
- **Estilo**: Queso rallado en pequeños trozos
- **Colores**:
  - Queso: Amarillo claro (#F7DC6F)
  - Queso más oscuro: (#F4D03F)
  - Brillos: Blanco (#FFFFFF)
- **Detalles**:
  - Forma de pequeños trozos irregulares
  - Textura granulada de queso rallado
  - Algunos píxeles blancos para brillo
  - Apariencia seca y granulada

#### 12. **salsa-roja.png** - Salsa Roja
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, forma de gota/mancha
- **Fondo**: Transparente
- **Estilo**: Salsa roja líquida
- **Colores**:
  - Rojo principal: (#E74C3C)
  - Rojo oscuro: (#C0392B)
  - Partes más claras: (#EC7063)
  - Especias: Puntos negros (#1C1C1C)
- **Detalles**:
  - Forma de gota o mancha irregular
  - Textura líquida sugerida
  - Pequeños puntos negros que representan semillas de chile
  - Apariencia líquida y espesa

#### 13. **salsa-verde.png** - Salsa Verde
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, forma de gota/mancha
- **Fondo**: Transparente
- **Estilo**: Salsa verde líquida
- **Colores**:
  - Verde principal: (#52BE80)
  - Verde oscuro: (#27AE60)
  - Verde claro: (#58D68D)
  - Partes tomatillo: Verde amarillento (#82E0AA)
- **Detalles**:
  - Forma de gota o mancha irregular
  - Textura líquida
  - Color verde vibrante
  - Algunos píxeles más claros para textura

#### 14. **guacamole.png** - Guacamole
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, forma de montículo
- **Fondo**: Transparente
- **Estilo**: Guacamole cremoso
- **Colores**:
  - Verde principal: (#58D68D)
  - Verde oscuro: (#27AE60)
  - Partes de aguacate: Verde (#52BE80) y amarillo (#F4D03F)
  - Textura: Puntos más oscuros (#1E8449)
- **Detalles**:
  - Forma de montículo suave
  - Textura cremosa sugerida
  - Pequeños trozos de aguacate visibles
  - Apariencia suave y cremosa

#### 15. **limon.png** - Limón en Rodajas
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, forma circular
- **Fondo**: Transparente
- **Estilo**: Rodaja de limón
- **Colores**:
  - Cáscara: Amarillo (#F4D03F)
  - Pulpa: Amarillo claro (#F7DC6F)
  - Centro: Blanco (#FFFFFF)
  - Jugo: Amarillo translúcido (#FCF3CF)
- **Detalles**:
  - Forma circular con segmentos visibles
  - Cáscara amarilla en el borde
  - Segmentos de pulpa visibles
  - Centro blanco característico

#### 16. **tomate.png** - Tomate Picado
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, forma de cubos pequeños
- **Fondo**: Transparente
- **Estilo**: Tomate picado en cubos pequeños
- **Colores**:
  - Rojo principal: (#E74C3C)
  - Rojo oscuro: (#C0392B)
  - Pulpa: Rojo claro (#EC7063)
  - Semillas: Amarillo (#F4D03F)
- **Detalles**:
  - Forma de pequeños cubos irregulares
  - Color rojo vibrante
  - Algunos píxeles amarillos para semillas
  - Textura jugosa

#### 17. **crema.png** - Crema Agria
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrada, forma de gota/mancha
- **Fondo**: Transparente
- **Estilo**: Crema agria blanca
- **Colores**:
  - Blanco principal: (#FFFFFF)
  - Blanco cremoso: (#F8F9FA)
  - Sombras: Gris muy claro (#E5E7E9)
- **Detalles**:
  - Forma de gota o mancha suave
  - Color blanco cremoso
  - Textura suave y cremosa
  - Apariencia espesa

### 🎮 Elementos de UI (64x64 px)

#### 18. **boton-jugar.png** - Botón Principal de Jugar
- **Tamaño**: 64x64 píxeles
- **Posición**: Centrado en el canvas
- **Fondo**: Rosa (#E91E63) con borde más oscuro (#C2185B)
- **Estilo**: Botón cuadrado con bordes redondeados (8px de radio)
- **Colores**:
  - Fondo: Rosa principal (#E91E63)
  - Borde: Rosa oscuro (#C2185B) - 2px
  - Texto/Icono: Blanco (#FFFFFF)
  - Hover (en código): Rosa más claro (#F06292)
- **Detalles**:
  - Forma rectangular con esquinas redondeadas
  - Texto "JUGAR" en mayúsculas, fuente pixel art bold
  - Sombra sutil en la parte inferior (3px offset)
  - Borde interno más claro para efecto 3D
  - Icono de play opcional en el centro

#### 19. **boton-pausa.png** - Botón de Pausa
- **Tamaño**: 64x64 píxeles
- **Posición**: Centrado
- **Fondo**: Gris (#757575) con borde (#616161)
- **Estilo**: Botón circular con icono de pausa
- **Colores**:
  - Fondo: Gris medio (#757575)
  - Borde: Gris oscuro (#616161) - 2px
  - Icono: Blanco (#FFFFFF)
- **Detalles**:
  - Forma circular perfecta
  - Icono de pausa: Dos rectángulos verticales paralelos
  - Sombra sutil
  - Efecto de profundidad con borde interno

#### 20. **boton-reiniciar.png** - Botón de Reiniciar
- **Tamaño**: 64x64 píxeles
- **Posición**: Centrado
- **Fondo**: Naranja (#FF9800) con borde (#F57C00)
- **Estilo**: Botón circular con icono de flecha circular
- **Colores**:
  - Fondo: Naranja (#FF9800)
  - Borde: Naranja oscuro (#F57C00) - 2px
  - Icono: Blanco (#FFFFFF)
- **Detalles**:
  - Forma circular
  - Icono: Flecha circular (símbolo de recargar)
  - Sombra en la parte inferior
  - Borde interno más claro

#### 21. **boton-menu.png** - Botón de Menú Principal
- **Tamaño**: 64x64 píxeles
- **Posición**: Centrado
- **Fondo**: Azul (#2196F3) con borde (#1976D2)
- **Estilo**: Botón cuadrado con icono de menú (3 líneas)
- **Colores**:
  - Fondo: Azul (#2196F3)
  - Borde: Azul oscuro (#1976D2) - 2px
  - Icono: Blanco (#FFFFFF)
- **Detalles**:
  - Forma rectangular con esquinas redondeadas
  - Icono: Tres líneas horizontales paralelas (hamburger menu)
  - Sombra sutil
  - Efecto de botón presionable

#### 22. **icono-monedas.png** - Icono de Monedas
- **Tamaño**: 64x64 píxeles
- **Posición**: Centrado
- **Fondo**: Transparente
- **Estilo**: Moneda dorada con símbolo de peso ($)
- **Colores**:
  - Moneda: Dorado (#F4D03F)
  - Borde: Dorado oscuro (#D68910) - 2px
  - Símbolo: Marrón oscuro (#6E2C00)
  - Brillo: Amarillo claro (#FCF3CF)
- **Detalles**:
  - Forma circular perfecta
  - Símbolo "$" o "M" en el centro
  - Brillo en la parte superior izquierda
  - Sombra sutil debajo
  - Efecto de moneda 3D

#### 23. **icono-puntos.png** - Icono de Puntos
- **Tamaño**: 64x64 píxeles
- **Posición**: Centrado
- **Fondo**: Transparente
- **Estilo**: Estrella o medalla con número
- **Colores**:
  - Estrella: Amarillo (#F4D03F)
  - Borde: Naranja (#FF9800) - 2px
  - Centro: Blanco (#FFFFFF)
  - Número: Negro (#1C1C1C)
- **Detalles**:
  - Forma de estrella de 5 puntas
  - O medalla circular con estrella
  - Número o símbolo "+" en el centro
  - Brillo en las puntas
  - Sombra sutil

#### 24. **icono-tiempo.png** - Icono de Reloj/Tiempo
- **Tamaño**: 64x64 píxeles
- **Posición**: Centrado
- **Fondo**: Transparente
- **Estilo**: Reloj circular con manecillas
- **Colores**:
  - Círculo: Rojo (#E74C3C)
  - Borde: Rojo oscuro (#C0392B) - 2px
  - Manecillas: Blanco (#FFFFFF)
  - Números: Negro (#1C1C1C)
- **Detalles**:
  - Forma circular perfecta
  - Manecillas de reloj (hora y minuto)
  - Números 12, 3, 6, 9 visibles
  - Centro con punto
  - Sombra sutil

#### 25. **barra-progreso.png** - Barra de Progreso
- **Tamaño**: 64x64 píxeles (pero será escalada horizontalmente)
- **Posición**: Centrado
- **Fondo**: Gris claro (#E5E7E9) con borde (#BDC3C7)
- **Estilo**: Barra horizontal con relleno
- **Colores**:
  - Fondo: Gris claro (#E5E7E9)
  - Borde: Gris (#BDC3C7) - 2px
  - Relleno: Verde (#2ECC71) o Rosa (#E91E63)
  - Borde del relleno: Verde oscuro (#27AE60) - 1px
- **Detalles**:
  - Forma rectangular horizontal
  - Esquinas redondeadas (4px)
  - Relleno que se anima de izquierda a derecha
  - Sombra interna para profundidad
  - Puede tener patrón de rayas diagonales

#### 26. **fondo-boton.png** - Fondo para Botones
- **Tamaño**: 64x64 píxeles (tileable)
- **Posición**: Centrado
- **Fondo**: Rosa (#E91E63) con patrón
- **Estilo**: Fondo con textura para botones
- **Colores**:
  - Base: Rosa (#E91E63)
  - Patrón: Rosa más oscuro (#C2185B) en puntos o líneas
  - Borde: Rosa oscuro (#C2185B) - 2px
- **Detalles**:
  - Forma rectangular
  - Patrón repetible (tileable)
  - Textura sutil de puntos o líneas
  - Sombra sutil
  - Puede usarse como base para otros botones

### 👤 Personajes (64x64 px)

#### 27. **cliente-1.png** - Cliente Tipo 1 (Hombre)
- **Tamaño**: 64x64 píxeles
- **Posición**: Centrado, personaje de cuerpo completo
- **Fondo**: Transparente
- **Estilo**: Hombre adulto, vista frontal, estilo pixel art
- **Colores**:
  - Piel: Beige (#F4D03F) o marrón claro (#D4A574)
  - Cabello: Negro (#1C1C1C) o marrón (#6E2C00)
  - Ropa: Azul (#3498DB) o verde (#52BE80)
  - Ojos: Negro (#1C1C1C) con blanco (#FFFFFF)
  - Boca: Rojo (#E74C3C) sonriente
- **Detalles**:
  - Cabeza: 24x24 px en la parte superior
  - Cuerpo: 32x40 px en el centro
  - Expresión: Sonriente y amigable
  - Postura: De pie, brazos a los lados
  - Ropa casual (camisa o playera)
  - Sin sombras complejas, estilo plano

#### 28. **cliente-2.png** - Cliente Tipo 2 (Mujer)
- **Tamaño**: 64x64 píxeles
- **Posición**: Centrado, personaje de cuerpo completo
- **Fondo**: Transparente
- **Estilo**: Mujer adulta, vista frontal, estilo pixel art
- **Colores**:
  - Piel: Beige claro (#F7DC6F)
  - Cabello: Negro (#1C1C1C), castaño (#6E2C00) o rubio (#F4D03F)
  - Ropa: Rosa (#E91E63) o morado (#9B59B6)
  - Ojos: Negro (#1C1C1C) con blanco (#FFFFFF)
  - Boca: Rojo (#E74C3C) sonriente
- **Detalles**:
  - Cabeza: 24x24 px
  - Cuerpo: 32x40 px
  - Cabello más largo que el cliente 1
  - Expresión: Sonriente
  - Postura: De pie, puede tener una mano en la cadera
  - Ropa femenina (vestido o blusa)

#### 29. **cliente-3.png** - Cliente Tipo 3 (Niño)
- **Tamaño**: 64x64 píxeles (pero el personaje es más pequeño, ~48x48)
- **Posición**: Centrado, personaje más pequeño
- **Fondo**: Transparente
- **Estilo**: Niño, vista frontal, estilo pixel art
- **Colores**:
  - Piel: Beige claro (#F7DC6F)
  - Cabello: Varios colores (negro, castaño, rubio)
  - Ropa: Colores vibrantes (amarillo #F4D03F, rojo #E74C3C, azul #3498DB)
  - Ojos: Grandes, negros (#1C1C1C) con blanco (#FFFFFF)
  - Boca: Sonriente, rojo (#E74C3C)
- **Detalles**:
  - Cabeza: 20x20 px (más grande proporcionalmente)
  - Cuerpo: 28x36 px (más pequeño)
  - Ojos más grandes y expresivos
  - Postura: De pie, puede tener brazos extendidos
  - Ropa casual infantil
  - Expresión muy alegre

#### 30. **chef-jugador.png** - Sprite del Chef (Jugador)
- **Tamaño**: 64x64 píxeles
- **Posición**: Centrado, personaje completo
- **Fondo**: Transparente
- **Estilo**: Chef con uniforme blanco y gorro
- **Colores**:
  - Uniforme: Blanco (#FFFFFF)
  - Gorro: Blanco (#FFFFFF) con detalles
  - Piel: Beige (#D4A574)
  - Delantal: Blanco con borde azul (#3498DB)
  - Bigote/Barba: Negro (#1C1C1C) o marrón (#6E2C00)
- **Detalles**:
  - Cabeza: 24x24 px con gorro de chef alto
  - Cuerpo: 32x40 px con uniforme blanco
  - Gorro de chef con detalles en el borde
  - Delantal visible
  - Expresión: Concentrado o sonriente
  - Postura: De pie, listo para cocinar
  - Puede tener un cuchillo o utensilio en la mano

#### 31. **chef-idle.png** - Chef en Posición de Espera
- **Tamaño**: 64x64 píxeles
- **Posición**: Centrado
- **Fondo**: Transparente
- **Estilo**: Chef en posición de descanso
- **Colores**: Igual que chef-jugador.png
- **Detalles**:
  - Misma estructura que chef-jugador.png
  - Postura: Brazos a los lados o cruzados
  - Expresión: Relajada
  - Sin utensilios en las manos
  - Listo para animación de idle (respiración sutil)

#### 32. **chef-cocinando.png** - Chef Cocinando
- **Tamaño**: 64x64 píxeles
- **Posición**: Centrado
- **Fondo**: Transparente
- **Estilo**: Chef en acción de cocinar
- **Colores**: Igual que chef-jugador.png
- **Detalles**:
  - Misma estructura base
  - Postura: Brazos extendidos hacia adelante
  - Puede tener un cuchillo, sartén o ingrediente en las manos
  - Expresión: Concentrado
  - Cuerpo ligeramente inclinado hacia adelante
  - Listo para animación de cocción

### 🏪 Escenarios (512x512 px o tiles 32x32)

#### 33. **fondo-cocina.png** - Fondo de la Cocina
- **Tamaño**: 800x600 píxeles (o 512x512)
- **Posición**: Fondo completo de la escena
- **Fondo**: Sólido beige (#FFF8E1) o patrón de azulejos
- **Estilo**: Cocina mexicana estilo pixel art
- **Colores**:
  - Paredes: Beige claro (#FFF8E1) o blanco (#FFFFFF)
  - Azulejos: Blanco (#FFFFFF) con líneas grises (#BDC3C7)
  - Muebles: Marrón (#8B4513) o beige oscuro (#D4A574)
  - Detalles: Negros (#1C1C1C) para contornos
- **Detalles**:
  - Vista frontal de la cocina
  - Estantes o alacenas en la parte superior
  - Espacio central para el área de trabajo
  - Iluminación suave, sin sombras complejas
  - Estilo plano pixel art
  - Puede tener decoraciones mexicanas (sombreros, banderas)

#### 34. **mesa-trabajo.png** - Mesa de Trabajo del Chef
- **Tamaño**: 256x128 píxeles (horizontal)
- **Posición**: Parte inferior central de la pantalla
- **Fondo**: Transparente o con sombra
- **Estilo**: Mesa de madera donde se arman los tacos
- **Colores**:
  - Madera: Marrón (#8B4513)
  - Veta de madera: Marrón oscuro (#6E2C00)
  - Borde: Marrón muy oscuro (#5D4037)
  - Sombra: Gris oscuro (#424242) con 50% opacidad
- **Detalles**:
  - Forma rectangular horizontal
  - Textura de madera con vetas horizontales
  - Borde más oscuro en los lados
  - Sombra sutil debajo
  - Superficie plana donde se colocan los ingredientes
  - Puede tener manchas o textura de uso

#### 35. **estufa.png** - Estufa para Cocinar
- **Tamaño**: 128x96 píxeles
- **Posición**: Lado izquierdo o derecho de la cocina
- **Fondo**: Transparente
- **Estilo**: Estufa de gas estilo mexicana
- **Colores**:
  - Cuerpo: Gris (#757575) o blanco (#FFFFFF)
  - Quemadores: Negro (#1C1C1C) con círculos
  - Perillas: Rojo (#E74C3C) o amarillo (#F4D03F)
  - Fuego (opcional): Rojo (#E74C3C), naranja (#FF9800), amarillo (#F4D03F)
- **Detalles**:
  - Forma rectangular vertical
  - 2-4 quemadores circulares en la parte superior
  - Perillas de control visibles
  - Borde más oscuro para profundidad
  - Puede tener fuego animado (en código)
  - Estilo retro/pixel art

#### 36. **tabla-cortar.png** - Tabla de Cortar
- **Tamaño**: 96x64 píxeles
- **Posición**: Sobre la mesa de trabajo
- **Fondo**: Transparente
- **Estilo**: Tabla de madera para cortar
- **Colores**:
  - Madera: Marrón claro (#D4A574)
  - Veta: Marrón (#8B4513)
  - Borde: Marrón oscuro (#6E2C00)
  - Marcas de corte: Gris (#95A5A6) - opcionales
- **Detalles**:
  - Forma rectangular horizontal
  - Textura de madera con vetas
  - Borde más oscuro
  - Puede tener pequeñas marcas de uso
  - Superficie lisa
  - Sombra sutil

#### 37. **mostrador.png** - Mostrador para Servir
- **Tamaño**: 256x96 píxeles (horizontal)
- **Posición**: Parte inferior, donde llegan los clientes
- **Fondo**: Transparente
- **Estilo**: Mostrador de servicio
- **Colores**:
  - Superficie: Blanco (#FFFFFF) o beige (#FFF8E1)
  - Borde frontal: Marrón (#8B4513) o gris (#757575)
  - Sombra: Gris (#95A5A6) con opacidad
- **Detalles**:
  - Forma rectangular horizontal
  - Superficie plana para servir
  - Borde frontal más grueso (perspectiva)
  - Sombra debajo para profundidad
  - Estilo simple y limpio
  - Altura adecuada para que los clientes alcancen

#### 38. **tile-suelo.png** - Tile del Suelo (Repetible)
- **Tamaño**: 32x32 píxeles (tile)
- **Posición**: Se repite para formar el suelo
- **Fondo**: Sólido o con patrón
- **Estilo**: Azulejo o baldosa
- **Colores**:
  - Base: Beige (#FFF8E1) o gris claro (#E5E7E9)
  - Líneas: Gris (#BDC3C7) - 1px
  - Patrón: Puede tener diseño mexicano sutil
- **Detalles**:
  - Forma cuadrada perfecta 32x32
  - Patrón que se repite sin costuras
  - Líneas de separación entre tiles
  - Color uniforme o patrón simple
  - Sin sombras (se agregan en código si es necesario)
  - Debe ser tileable (se repite perfectamente)

#### 39. **tile-pared.png** - Tile de Pared (Repetible)
- **Tamaño**: 32x32 píxeles (tile)
- **Posición**: Se repite para formar las paredes
- **Fondo**: Sólido o con patrón
- **Estilo**: Azulejo de pared o textura
- **Colores**:
  - Base: Blanco (#FFFFFF) o beige claro (#FFF8E1)
  - Líneas: Gris muy claro (#F5F5F5) - 1px
  - Patrón: Muy sutil o sin patrón
- **Detalles**:
  - Forma cuadrada perfecta 32x32
  - Patrón tileable
  - Líneas de separación sutiles
  - Color más claro que el suelo
  - Textura muy sutil
  - Sin sombras

### 🎯 Objetos del Juego (32x32 px)

#### 40. **taco-armado.png** - Taco Completo Armado
- **Tamaño**: 64x64 píxeles (más grande para mostrar detalles)
- **Posición**: Centrado
- **Fondo**: Transparente
- **Estilo**: Taco doblado con ingredientes visibles
- **Colores**:
  - Tortilla: Amarillo dorado (#F4D03F) doblada
  - Ingredientes: Varios colores según contenido
  - Sombra: Gris (#95A5A6) con opacidad
- **Detalles**:
  - Forma de taco doblado (forma de U)
  - Ingredientes visibles saliendo por la parte superior
  - Tortilla doblada con pliegues
  - Colores de los ingredientes mezclados
  - Sombra sutil debajo
  - Apariencia apetitosa y completa

#### 41. **taco-perfecto.png** - Taco Perfecto (con Brillo)
- **Tamaño**: 64x64 píxeles
- **Posición**: Centrado
- **Fondo**: Transparente
- **Estilo**: Taco con efecto de brillo/éxito
- **Colores**:
  - Base: Igual que taco-armado.png
  - Brillo: Amarillo (#F4D03F) o blanco (#FFFFFF) con opacidad
  - Efecto estrella: Amarillo (#F4D03F) en las esquinas
  - Resplandor: Amarillo claro (#FCF3CF) alrededor
- **Detalles**:
  - Misma base que taco-armado.png
  - Brillo animado (en código) o estático
  - Estrellas pequeñas alrededor
  - Resplandor suave
  - Efecto de "éxito" visual
  - Puede tener partículas (en código)

#### 42. **plato.png** - Plato para Servir
- **Tamaño**: 64x64 píxeles
- **Posición**: Centrado
- **Fondo**: Transparente
- **Estilo**: Plato circular blanco
- **Colores**:
  - Plato: Blanco (#FFFFFF)
  - Borde: Gris claro (#E5E7E9) - 2px
  - Sombra: Gris (#95A5A6) con opacidad
  - Interior: Blanco con sombra interna sutil
- **Detalles**:
  - Forma circular perfecta
  - Borde más oscuro para profundidad
  - Sombra interna para efecto de profundidad
  - Sombra externa debajo
  - Superficie lisa
  - Estilo simple y limpio

#### 43. **orden-papel.png** - Papel con la Orden del Cliente
- **Tamaño**: 128x96 píxeles (horizontal)
- **Posición**: Parte superior de la pantalla o lado
- **Fondo**: Blanco con borde
- **Estilo**: Nota de papel con lista de ingredientes
- **Colores**:
  - Papel: Blanco (#FFFFFF) o beige (#FFF8E1)
  - Borde: Gris (#BDC3C7) - 1px
  - Texto: Negro (#1C1C1C)
  - Pin (opcional): Rojo (#E74C3C)
- **Detalles**:
  - Forma rectangular horizontal
  - Borde simple
  - Puede tener líneas para texto
  - Pin de sujetapapeles en la esquina superior (opcional)
  - Textura de papel (muy sutil)
  - Sombra sutil
  - Lista de ingredientes visible (iconos pequeños)

#### 44. **check-verde.png** - Check de Aprobación
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrado
- **Fondo**: Transparente
- **Estilo**: Checkmark verde de éxito
- **Colores**:
  - Check: Verde (#2ECC71)
  - Borde: Verde oscuro (#27AE60) - 1px
  - Fondo circular (opcional): Verde claro (#58D68D) con opacidad
- **Detalles**:
  - Forma de checkmark (✓)
  - Líneas gruesas (3-4px)
  - Puede estar dentro de un círculo verde
  - Sombra sutil
  - Estilo bold y visible
  - Efecto de "correcto"

#### 45. **x-roja.png** - X de Error
- **Tamaño**: 32x32 píxeles
- **Posición**: Centrado
- **Fondo**: Transparente
- **Estilo**: X roja de error
- **Colores**:
  - X: Rojo (#E74C3C)
  - Borde: Rojo oscuro (#C0392B) - 1px
  - Fondo circular (opcional): Rojo claro (#EC7063) con opacidad
- **Detalles**:
  - Forma de X (✗)
  - Líneas gruesas (3-4px) que se cruzan
  - Puede estar dentro de un círculo rojo
  - Sombra sutil
  - Estilo bold y visible
  - Efecto de "incorrecto"

### 🎨 Efectos Visuales (64x64 px)

#### 46. **particulas-estrella.png** - Partículas de Estrella (Éxito)
- **Tamaño**: 64x64 píxeles (o múltiples tamaños: 8x8, 16x16, 32x32)
- **Posición**: Varias posiciones para animación
- **Fondo**: Transparente
- **Estilo**: Estrella pequeña brillante
- **Colores**:
  - Estrella: Amarillo (#F4D03F)
  - Brillo: Blanco (#FFFFFF)
  - Resplandor: Amarillo claro (#FCF3CF) con opacidad
- **Detalles**:
  - Forma de estrella de 5 puntas
  - Múltiples tamaños para variedad
  - Brillo en el centro
  - Puntas afiladas
  - Puede tener animación de rotación (en código)
  - Usado para efectos de éxito

#### 47. **particulas-fuego.png** - Partículas de Fuego (Cocinando)
- **Tamaño**: 32x32 píxeles (o múltiples tamaños)
- **Posición**: Sobre la estufa
- **Fondo**: Transparente
- **Estilo**: Llama de fuego
- **Colores**:
  - Centro: Amarillo (#F4D03F)
  - Medio: Naranja (#FF9800)
  - Exterior: Rojo (#E74C3C)
  - Base: Rojo oscuro (#C0392B)
- **Detalles**:
  - Forma de llama irregular
  - Múltiples capas de color
  - Movimiento hacia arriba sugerido
  - Textura de fuego
  - Usado para animación de cocción
  - Varios tamaños para efecto de profundidad

#### 48. **brillo.png** - Efecto de Brillo
- **Tamaño**: 64x64 píxeles
- **Posición**: Sobre objetos que brillan
- **Fondo**: Transparente
- **Estilo**: Brillo circular o estelar
- **Colores**:
  - Centro: Blanco (#FFFFFF)
  - Medio: Amarillo claro (#FCF3CF)
  - Exterior: Amarillo (#F4D03F) con opacidad degradada
- **Detalles**:
  - Forma circular o de estrella
  - Degradado de opacidad (centro opaco a exterior transparente)
  - Rayos de luz (opcional)
  - Usado como overlay
  - Efecto de "especial" o "perfecto"

#### 49. **humo.png** - Humo de Cocina
- **Tamaño**: 64x64 píxeles (o múltiples tamaños)
- **Posición**: Sobre la estufa o área de cocción
- **Fondo**: Transparente
- **Estilo**: Nube de humo
- **Colores**:
  - Centro: Gris oscuro (#424242)
  - Medio: Gris (#757575)
  - Exterior: Gris claro (#BDC3C7) con opacidad
- **Detalles**:
  - Forma de nube irregular
  - Múltiples formas para variedad
  - Opacidad degradada
  - Textura suave
  - Usado para animación de humo
  - Se eleva hacia arriba

#### 50. **explosion.png** - Explosión de Éxito
- **Tamaño**: 128x128 píxeles
- **Posición**: Centro de la acción exitosa
- **Fondo**: Transparente
- **Estilo**: Explosión de partículas/estrellas
- **Colores**:
  - Centro: Amarillo (#F4D03F)
  - Medio: Naranja (#FF9800)
  - Exterior: Rojo (#E74C3C) con opacidad
  - Partículas: Varios colores (amarillo, naranja, rojo)
- **Detalles**:
  - Forma circular con partículas saliendo
  - Múltiples capas
  - Partículas pequeñas alrededor
  - Efecto de expansión
  - Usado para grandes éxitos
  - Animación de expansión (en código)

### 🎵 Elementos Adicionales

#### 51. **logo-juego.png** - Logo del Juego
- **Tamaño**: 128x128 píxeles
- **Posición**: Centrado en menú principal
- **Fondo**: Transparente o con fondo rosa
- **Estilo**: Logo de TACO NAZO en pixel art
- **Colores**:
  - Texto: Blanco (#FFFFFF) o rosa (#E91E63)
  - Fondo (opcional): Rosa (#E91E63) con borde
  - Detalles: Varios colores según diseño
- **Detalles**:
  - Texto "TACO NAZO" en estilo pixel art bold
  - Puede tener icono de taco
  - Bordes definidos
  - Estilo retro
  - Sombra sutil
  - Muy visible y reconocible

#### 52. **titulo-juego.png** - Título del Juego
- **Tamaño**: 256x64 píxeles (horizontal)
- **Posición**: Parte superior del menú
- **Fondo**: Transparente
- **Estilo**: Título principal del juego
- **Colores**:
  - Texto: Rosa (#E91E63) o blanco (#FFFFFF)
  - Borde: Rosa oscuro (#C2185B) - 2px
  - Sombra: Negro (#1C1C1C) con opacidad
- **Detalles**:
  - Texto "TACO NAZO" grande
  - Fuente pixel art bold
  - Borde definido
  - Sombra para profundidad
  - Estilo impactante

#### 53. **fondo-menu.png** - Fondo del Menú Principal
- **Tamaño**: 800x600 píxeles
- **Posición**: Fondo completo
- **Fondo**: Sólido o con patrón
- **Estilo**: Fondo decorativo del menú
- **Colores**:
  - Base: Rosa claro (#FCE4EC) o beige (#FFF8E1)
  - Patrón: Rosa (#E91E63) o decoraciones mexicanas
  - Elementos decorativos: Varios colores
- **Detalles**:
  - Fondo completo de la pantalla
  - Puede tener decoraciones mexicanas (sombreros, banderas, tacos)
  - Patrón sutil
  - Estilo pixel art
  - Sin elementos que distraigan mucho
  - Centrado para UI

#### 54. **fondo-nivel.png** - Fondo Durante el Juego
- **Tamaño**: 800x600 píxeles
- **Posición**: Fondo completo durante el juego
- **Fondo**: Cocina completa
- **Estilo**: Cocina mexicana con todos los elementos
- **Colores**: Igual que fondo-cocina.png pero completo
- **Detalles**:
  - Combina todos los elementos de escenario
  - Mesa de trabajo visible
  - Estufa visible
  - Mostrador visible
  - Espacio para UI (puntos, tiempo, monedas)
  - Estilo cohesivo
  - Sin distracciones

#### 55. **game-over.png** - Pantalla de Game Over
- **Tamaño**: 400x300 píxeles
- **Posición**: Centro de la pantalla
- **Fondo**: Rojo oscuro (#8B0000) o gris (#424242) con borde
- **Estilo**: Panel de game over
- **Colores**:
  - Fondo: Rojo oscuro (#8B0000) o gris (#424242)
  - Borde: Rojo (#E74C3C) o gris oscuro (#616161) - 4px
  - Texto: Blanco (#FFFFFF)
  - Botones: Varios colores
- **Detalles**:
  - Panel rectangular con bordes redondeados
  - Texto "GAME OVER" grande
  - Puntuación final visible
  - Botones: Reintentar, Menú
  - Sombra fuerte
  - Estilo dramático

#### 56. **victoria.png** - Pantalla de Victoria
- **Tamaño**: 400x300 píxeles
- **Posición**: Centro de la pantalla
- **Fondo**: Verde (#2ECC71) o dorado (#F4D03F) con borde
- **Estilo**: Panel de victoria
- **Colores**:
  - Fondo: Verde (#2ECC71) o dorado (#F4D03F)
  - Borde: Verde oscuro (#27AE60) o dorado oscuro (#D68910) - 4px
  - Texto: Blanco (#FFFFFF) o negro (#1C1C1C)
  - Estrellas: Amarillo (#F4D03F)
- **Detalles**:
  - Panel rectangular con bordes redondeados
  - Texto "¡VICTORIA!" o "¡NIVEL COMPLETADO!"
  - Estrellas alrededor
  - Puntuación y monedas ganadas
  - Botones: Siguiente Nivel, Menú
  - Efecto celebratorio
  - Sombra sutil

### 📋 Recetas/Órdenes (UI Elements)

#### 57. **receta-pastor.png** - Receta de Taco al Pastor
- **Tamaño**: 200x150 píxeles (vertical)
- **Posición**: Panel lateral o superior
- **Fondo**: Blanco (#FFFFFF) con borde rosa (#E91E63)
- **Estilo**: Tarjeta de receta con ingredientes
- **Colores**:
  - Fondo: Blanco (#FFFFFF)
  - Borde: Rosa (#E91E63) - 3px
  - Título: Rosa (#E91E63) bold
  - Ingredientes: Iconos pequeños 16x16 px
  - Texto: Negro (#1C1C1C)
- **Detalles**:
  - Panel rectangular vertical
  - Título "TACO AL PASTOR" en la parte superior
  - Lista de ingredientes con iconos:
    1. Tortilla (icono)
    2. Carne al pastor (icono)
    3. Cebolla (icono)
    4. Cilantro (icono)
    5. Piña (icono) - opcional
    6. Salsa roja (icono)
  - Números o viñetas para orden
  - Borde destacado
  - Sombra sutil

#### 58. **receta-asada.png** - Receta de Taco de Asada
- **Tamaño**: 200x150 píxeles
- **Posición**: Panel lateral o superior
- **Fondo**: Blanco (#FFFFFF) con borde
- **Estilo**: Igual que receta-pastor.png
- **Colores**: Similar pero puede variar el color del borde
- **Detalles**:
  - Misma estructura
  - Título "TACO DE ASADA"
  - Ingredientes:
    1. Tortilla
    2. Carne asada
    3. Cebolla
    4. Cilantro
    5. Salsa verde
  - Iconos de cada ingrediente

#### 59. **receta-carnitas.png** - Receta de Taco de Carnitas
- **Tamaño**: 200x150 píxeles
- **Posición**: Panel lateral o superior
- **Fondo**: Blanco con borde
- **Estilo**: Igual estructura
- **Detalles**:
  - Título "TACO DE CARNITAS"
  - Ingredientes:
    1. Tortilla
    2. Carnitas
    3. Cebolla
    4. Cilantro
    5. Salsa roja

#### 60. **receta-barbacoa.png** - Receta de Taco de Barbacoa
- **Tamaño**: 200x150 píxeles
- **Posición**: Panel lateral o superior
- **Fondo**: Blanco con borde
- **Estilo**: Igual estructura
- **Detalles**:
  - Título "TACO DE BARBACOA"
  - Ingredientes:
    1. Tortilla
    2. Barbacoa
    3. Cebolla
    4. Cilantro
    5. Limón

#### 61. **receta-pescado.png** - Receta de Taco de Pescado
- **Tamaño**: 200x150 píxeles
- **Posición**: Panel lateral o superior
- **Fondo**: Blanco con borde
- **Estilo**: Igual estructura
- **Detalles**:
  - Título "TACO DE PESCADO"
  - Ingredientes:
    1. Tortilla
    2. Pescado
    3. Repollo (lechuga especial)
    4. Salsa especial
    5. Limón

#### 62. **receta-chorizo.png** - Receta de Taco de Chorizo
- **Tamaño**: 200x150 píxeles
- **Posición**: Panel lateral o superior
- **Fondo**: Blanco con borde
- **Estilo**: Igual estructura
- **Detalles**:
  - Título "TACO DE CHORIZO"
  - Ingredientes:
    1. Tortilla
    2. Chorizo
    3. Cebolla
    4. Queso
    5. Salsa roja

### 🎁 Power-ups y Bonificaciones (32x32 px)

#### 63. **powerup-tiempo.png** - Power-up de Tiempo Extra
- **Tamaño**: 32x32 píxeles
- **Posición**: Aparece aleatoriamente durante el juego
- **Fondo**: Transparente
- **Estilo**: Reloj con símbolo de tiempo
- **Colores**:
  - Reloj: Azul (#3498DB)
  - Borde: Azul oscuro (#2980B9) - 2px
  - Manecillas: Blanco (#FFFFFF)
  - Símbolo "+": Verde (#2ECC71)
  - Brillo: Azul claro (#85C1E2) con opacidad
- **Detalles**:
  - Forma de reloj circular
  - Símbolo "+" o "⏱" visible
  - Brillo animado (en código)
  - Sombra sutil
  - Efecto de "especial"
  - Se mueve o flota (en código)

#### 64. **powerup-puntos.png** - Power-up de Puntos Dobles
- **Tamaño**: 32x32 píxeles
- **Posición**: Aparece aleatoriamente
- **Fondo**: Transparente
- **Estilo**: Estrella o medalla con "x2"
- **Colores**:
  - Estrella: Dorado (#F4D03F)
  - Borde: Dorado oscuro (#D68910) - 2px
  - Símbolo "x2": Negro (#1C1C1C) o blanco (#FFFFFF)
  - Brillo: Dorado claro (#FCF3CF)
- **Detalles**:
  - Forma de estrella o medalla
  - Símbolo "x2" en el centro
  - Brillo animado
  - Sombra sutil
  - Efecto de "bonificación"
  - Muy visible

#### 65. **powerup-ayuda.png** - Power-up de Ayuda/Hint
- **Tamaño**: 32x32 píxeles
- **Posición**: Aparece aleatoriamente
- **Fondo**: Transparente
- **Estilo**: Bombilla o signo de interrogación
- **Colores**:
  - Bombilla: Amarillo (#F4D03F)
  - Borde: Naranja (#FF9800) - 2px
  - Brillo: Amarillo claro (#FCF3CF)
  - Símbolo "?": Negro (#1C1C1C)
- **Detalles**:
  - Forma de bombilla o círculo con "?"
  - Brillo animado
  - Sombra sutil
  - Efecto de "ayuda"
  - Color llamativo

#### 66. **estrella-dorada.png** - Estrella Dorada (Bonificación)
- **Tamaño**: 32x32 píxeles (o múltiples tamaños)
- **Posición**: Aparece al completar objetivos
- **Fondo**: Transparente
- **Estilo**: Estrella dorada brillante
- **Colores**:
  - Estrella: Dorado (#F4D03F)
  - Centro: Dorado oscuro (#D68910)
  - Brillo: Blanco (#FFFFFF) y dorado claro (#FCF3CF)
  - Resplandor: Dorado con opacidad
- **Detalles**:
  - Estrella de 5 puntas perfecta
  - Brillo intenso en el centro
  - Puntas afiladas
  - Múltiples capas de color
  - Animación de rotación (en código)
  - Usado para logros y bonificaciones especiales
  - Muy brillante y llamativa

## 🎮 Lógica del Videojuego

### Flujo Principal del Juego

```
1. MENÚ PRINCIPAL
   ├── Botón JUGAR
   ├── Botón TUTORIAL
   ├── Botón TIENDA
   └── Botón CONFIGURACIÓN

2. SELECCIÓN DE NIVEL
   ├── Nivel 1: Tutorial (3 órdenes)
   ├── Nivel 2: Fácil (5 órdenes)
   ├── Nivel 3: Medio (8 órdenes)
   ├── Nivel 4: Difícil (12 órdenes)
   └── Nivel 5: Experto (15 órdenes)

3. DURANTE EL JUEGO
   ├── Cliente llega con orden
   ├── Mostrar receta en pantalla
   ├── Jugador selecciona ingredientes
   ├── Armar taco en orden correcto
   ├── Validar taco
   └── Servir al cliente

4. FIN DEL NIVEL
   ├── Mostrar puntuación
   ├── Mostrar monedas ganadas
   ├── Desbloquear siguiente nivel
   └── Opción de repetir nivel
```

### Sistema de Recetas

Cada taco tiene una receta específica con ingredientes en orden:

**Taco al Pastor:**
1. Tortilla
2. Carne al pastor
3. Cebolla
4. Cilantro
5. Piña (opcional)
6. Salsa roja

**Taco de Asada:**
1. Tortilla
2. Carne asada
3. Cebolla
4. Cilantro
5. Salsa verde

**Taco de Carnitas:**
1. Tortilla
2. Carnitas
3. Cebolla
4. Cilantro
5. Salsa roja

**Taco de Barbacoa:**
1. Tortilla
2. Barbacoa
3. Cebolla
4. Cilantro
5. Limón

**Taco de Pescado:**
1. Tortilla
2. Pescado
3. Repollo
4. Salsa especial
5. Limón

**Taco de Chorizo:**
1. Tortilla
2. Chorizo
3. Cebolla
4. Queso
5. Salsa roja

### Sistema de Validación

```javascript
function validarTaco(ingredientesSeleccionados, receta) {
  let puntos = 0;
  let ingredientesCorrectos = 0;
  
  // Verificar orden
  for (let i = 0; i < receta.length; i++) {
    if (ingredientesSeleccionados[i] === receta[i]) {
      ingredientesCorrectos++;
    }
  }
  
  // Calcular puntos
  if (ingredientesCorrectos === receta.length) {
    puntos = 100; // Taco perfecto
  } else if (ingredientesCorrectos >= receta.length * 0.8) {
    puntos = 50; // Taco bueno
  } else if (ingredientesCorrectos >= receta.length * 0.5) {
    puntos = 25; // Taco regular
  } else {
    puntos = -10; // Taco malo
  }
  
  return puntos;
}
```

### Sistema de Tiempo

- Cada orden tiene un tiempo límite
- Nivel Fácil: 60 segundos por orden
- Nivel Medio: 45 segundos por orden
- Nivel Difícil: 30 segundos por orden
- Nivel Experto: 20 segundos por orden

### Sistema de Dificultad Progresiva

- **Nivel 1**: 1 tipo de taco, ingredientes básicos
- **Nivel 2**: 2 tipos de tacos, más ingredientes
- **Nivel 3**: 3 tipos de tacos, ingredientes opcionales
- **Nivel 4**: 4 tipos de tacos, tiempo reducido
- **Nivel 5**: Todos los tipos, máximo desafío

## 🛠️ Tecnologías Sugeridas

- **Motor**: Phaser.js, PixiJS, o React + Canvas
- **Lenguaje**: TypeScript/JavaScript
- **Estilo**: Pixel Art con paleta de colores limitada
- **Audio**: Efectos de sonido 8-bit

## 📁 Estructura de Carpetas Sugerida

```
public/
  images/
    ingredientes/
      - tortilla.png
      - carne-pastor.png
      - ...
    ui/
      - boton-jugar.png
      - boton-pausa.png
      - ...
    personajes/
      - cliente-1.png
      - chef-jugador.png
      - ...
    escenarios/
      - fondo-cocina.png
      - mesa-trabajo.png
      - ...
    efectos/
      - particulas-estrella.png
      - brillo.png
      - ...
```

## 🎨 Guía de Estilo Pixel Art

### Colores Principales
- **Rosa Principal**: #E91E63 (Taco Nazo)
- **Rosa Claro**: #FCE4EC (Fondos)
- **Beige**: #FFF8E1 (Fondos alternativos)
- **Verde**: #4CAF50 (Éxito)
- **Rojo**: #F44336 (Error)
- **Amarillo**: #FFC107 (Monedas)

### Tamaños de Sprites
- **Ingredientes**: 32x32 px
- **Personajes**: 64x64 px
- **UI Elements**: 64x64 px
- **Fondos**: 512x512 px o tiles 32x32 px

### Estilo de Pixel Art
- Sin anti-aliasing
- Colores sólidos
- Bordes definidos
- Sombras simples
- Animaciones frame-by-frame

## 🎯 Objetivos del Juego

1. **Completar todos los niveles**
2. **Desbloquear todas las recetas**
3. **Conseguir el mayor puntaje posible**
4. **Completar desafíos diarios**
5. **Coleccionar todos los logros**

## 🏆 Sistema de Logros

- **Primer Taco**: Arma tu primer taco
- **Perfeccionista**: 10 tacos perfectos seguidos
- **Velocista**: Completa una orden en menos de 10 segundos
- **Maestro Chef**: Completa todos los niveles
- **Coleccionista**: Desbloquea todas las recetas

## 📝 Notas de Implementación

1. Todas las imágenes deben estar en formato PNG con transparencia
2. Usar spritesheets para animaciones
3. Implementar sistema de partículas para efectos
4. Agregar feedback visual inmediato en cada acción
5. Implementar sistema de guardado de progreso

## 🚀 Próximos Pasos

1. Importar todas las imágenes PNG en la carpeta `public/images/`
2. Crear el sistema de sprites y animaciones
3. Implementar la lógica de validación de tacos
4. Desarrollar el sistema de niveles
5. Agregar efectos de sonido y música
6. Implementar sistema de guardado
7. Agregar tutorial interactivo

---

**¡Listo para empezar a desarrollar el videojuego de TACO NAZO!** 🎮🌮

