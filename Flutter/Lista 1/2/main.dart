import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: MyMessageWidget(),
        ),
      ),
    );
  }
}

class MyMessageWidget extends StatelessWidget {
  
  Widget build(BuildContext context) {
    return Text(
      'Exercício Flutter !!!',
      style: TextStyle(
        fontSize: 24.0,
        fontWeight: FontWeight.bold,
        color: Color.fromARGB(255, 69, 14, 219),
      ),
    );
  }
}