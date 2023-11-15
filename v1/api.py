import pymysql

try:
    mydb = pymysql.connect(
        host="localhost", 
        user="root", 
        password="NeonGenesis_Fantasy2001", 
        database="libros", 
        port=3306
    )
    try:
        with mydb.cursor() as cursor:
            query = "select * from libro"
            cursor.execute(query)
            libros = cursor.fetchall()
            for libro in libros:
                print(libro)
                cursor.close()
    finally:
        mydb.close()
except(pymysql.err.OperationalError, pymysql.err.InternalError) as e:
    print("Ocurrio un error al conectar", e)