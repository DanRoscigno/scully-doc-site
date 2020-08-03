---
title: 1. ¿Qué son los Schematics?
description: 'qué son los Schematics y cómo funcionan?'
published: true
slugs: que-es-angular-schematics
---

# Lección 1 - Teoría de Schematics

## ¿Qué son los Schematics?

Son generadores de código basados en templates pre escritos.

Eso quiere decir que es código descriptivo que utiliza scaffolding, para generar más otros artefactos, como código, templates o incluso ficheros en el sistema

## ¿Qué tecnología hay por debajo?

Es una muy buena pregunta. Schematics abstrae node, ya que necesita acceder al sistema de archivos del ordenador/sistema donde se ejecute. 

La mayoría de los métodos de Schematics, son wrappers de funciones de node fs.
