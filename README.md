# planning

penjelasan  fiture:

ada 2 fiture utama dalam :

1. produk
2. cart

fitur - fitur yang dinginkan dalam setiap halaman

1. produk
    1. porduct harus punya CRUD
    2. halaman pertama yang di load aplikasi mensiplay 5 data  yang dapat di search dengan title dari product dan memiliki pagnasi
2. card
    1. add dan remove produk ke card dan simpan 
    2. tambahkan data ui notifikasi berupa badge list fiture chip
3. page berisi userlist yang bisa digunakan untuk login
4. 
    1. 
    
    penjelasan terkait fiture - fiture dan time line pekerjaan
    
    berdasarkan fiture - fiture yang telah dijelaskan terdapat beberapa yang dibutuhkan
    
    1. halaman awal atau home
        1. lists poduct dengan paginasi 5 mengunakan fiture infinite scrolll data di rurutakan berdasarkan yang terbaru
        2. filture filter dangan judul prduct
        3. icon cart 
        4. prduct mempunyai halaman detail bisa lihat detail terlebih dahulu sebelum masuk kart
        5. anomasi saat posduct di seet ke cart
    2. halaman cart
        1. lihat list porduct yang di add ke cart
        2. chekout fiture e walet coonect ke meta mask dengan wagmijs
    3. halaman list user admin
        1. menggunakan tanstack table untuk lst user admin
        2. admin bisa lamgsu di ubah data pada table
    4. halaman login admin
        1. gunakan next-auth untuk login dan meyimpan jwt
    5. halaman CRUD product 
        1. hanya admin yang bisa akses edit product
    6.