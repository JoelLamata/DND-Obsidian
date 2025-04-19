import deepl
import re

# Configura tu clave de API de DeepL
auth_key = "ab701de9-c7a2-ae9d-fcf4-4a3cfa590a0d:fx"
translator = deepl.Translator(auth_key)

# Función para extraer y traducir la segunda columna de la tabla
def traducir_tabla_markdown(contenido_markdown):
    lineas = contenido_markdown.splitlines()
    resultado = []
    
    # Expresión regular para identificar filas de la tabla
    patron_fila = re.compile(r'^\|\s*(\d+)\s*\|\s*(.*?)\s*(\|)?$')
    
    for linea in lineas:
        match = patron_fila.match(linea)
        if match:
            texto_a_traducir = match.group(2)
            traduccion = translator.translate_text(texto_a_traducir, target_lang="ES")
            resultado.append(f"| {match.group(1)} | {traduccion.text} |")
        else:
            resultado.append(linea)
    
    return "\n".join(resultado)

# Función para leer el archivo de entrada y escribir el archivo de salida
def procesar_archivo_markdown(archivo_entrada, archivo_salida):
    with open(archivo_entrada, 'r', encoding='utf-8') as archivo:
        contenido_markdown = archivo.read()
    
    contenido_traducido = traducir_tabla_markdown(contenido_markdown)
    
    with open(archivo_salida, 'w', encoding='utf-8') as archivo:
        archivo.write(contenido_traducido)
    print("Traducción finalizada.")

# Ejemplo de uso
archivo_entrada = 'temp trad.md'  # Cambia este nombre al archivo que quieras procesar
archivo_salida = 'tabla_traducida.md'  # El archivo de salida con las traducciones

procesar_archivo_markdown(archivo_entrada, archivo_salida)
