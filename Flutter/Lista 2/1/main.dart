import 'package:flutter/material.dart';

void main() => runApp(
      MaterialApp(
        home: Home(),
        debugShowCheckedModeBanner: false,
      ),
    );

class Home extends StatelessWidget {
  final String nome = "Ana", dia = "quinta-feira";
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: const Icon(Icons.home),
        title: const Text('Página Inicial'),
      ),
      body: Center(
        child: RichText(
          textAlign: TextAlign.center,
          textDirection: TextDirection.ltr, //Opcional, porque herda do widget pai que informar a direção do texto.

          text: TextSpan(
            text: "Olá, ",
            style: const TextStyle(
              color: Colors.green,
              fontSize: 30,
              fontWeight: FontWeight.bold,
              backgroundColor: Colors.white,
            ), //TextStyle.
            children: <TextSpan>[
              TextSpan(
                text: nome,
                style: const TextStyle(
                  color: Colors.blue,
                  decoration: TextDecoration.underline,
                  backgroundColor: Colors.green,
                ),
              ),
              TextSpan(
                text: "!",
                style: const TextStyle(
                  color: Colors.green,
                  fontSize: 30,
                  fontWeight: FontWeight.bold,
                  backgroundColor: Colors.white,
                )
              ),
              TextSpan(
                text: '\nHoje é $dia!',
                style: const TextStyle(
                  color: Colors.red,
                  fontSize: 30,
                  fontWeight: FontWeight.bold,
                  backgroundColor: Colors.yellow,
                ), //TextStyle.
              ),
              const TextSpan(
                text: '! \nBom dia!',
              ),
            ],
          ),
        ),
      ),
      backgroundColor: Color.fromARGB(255, 0, 0, 0),      
    );
  }
}