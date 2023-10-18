import 'package:flutter/material.dart';

void main() => runApp(
      MaterialApp(
        home: Home(),
        debugShowCheckedModeBanner: false,
      ),
    );

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: const Icon(Icons.home),
        title: const Text('Página Inicial'),
      ),
      body: Center(
        child: Column(
          mainAxisSize: MainAxisSize.max,
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Expanded(
              child: FittedBox(
                fit: BoxFit.contain, // Permite aumentar o tamanho do logo.
                child: FlutterLogo(),
              ),
            ),
            Expanded(
              child: Image(
                image: NetworkImage(
                  'https://picsum.photos/250?image=9',
                ),
              ),
            ),
            Expanded(
              child: Text(
                "Google Flutter",
                style: TextStyle(
                  fontSize: 30,
                  fontWeight: FontWeight.bold,
                  color: Colors.blue,
                  backgroundColor: Colors.white,
                ),
              ),
            ),
          ],
        ),
      ),
      backgroundColor: Color.fromARGB(255, 0, 0, 0),
    );
  }
}