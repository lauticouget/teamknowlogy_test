# teamknowlogy_test

Pasos para desplegar localmente: 
- Ejecutar comando "Git Clone https://github.com/lauticouget/teamknowlogy_test.git" en consola.
- ingresar a la carpeta del proyecto y ejecutar el comando "npm i" en consola.
- Copiar claves del archivo ".env.template" a un nuevo archivo ".env" 
    >(En este caso dejé las claves para el servicio de GCloug activo, dado que no hay riesgo al ser una prueba)

# Ejemplos de uso de API

## /mutation (POST)
- ejemplo de request:
> {
>     "dna": [
>         "ACGCGA",
>         "AAACCC",
>         "AAACCC",
>         "AACACA"
>     ]
> }

- ejemplo de response
> {
>     "success": true,
>     "message": "DNA mutation is true"
> }

## /stats (GET)
- ejemplo de response:
> {
>     "result": [
>         {
>             "count_mutations": 1,
>             "count_no_mutation": 1,
>             "mutated_percentage": 0.5
>         }
>     ]
> }




# Gcloud APP Engine Url:

**https://smooth-tendril-305119.uc.r.appspot.com**