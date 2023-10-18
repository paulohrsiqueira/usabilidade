import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Exemplo de Layout'),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Container(
                child: FlutterLogo(
                  size: 200,
                ),  
              ),
              SizedBox(
                  height: 20), 
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Container(
                    child: Image(
                      image: NetworkImage(
                        'https://picsum.photos/250?image=15',
                      ),
                    ),
                  ),
                  SizedBox(width: 1),
                  Container(
                    child: Image(
                      image: NetworkImage(
                        'https://picsum.photos/250?image=10',
                      ),
                    ),
                  ),
                  SizedBox(width: 1),
                  Container(
                    child: Image(
                      image: NetworkImage(
                        'https://picsum.photos/250?image=25',
                      ),
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
         backgroundColor: Color.fromARGB(255, 0, 119, 255),
      ),
    );
  }
}