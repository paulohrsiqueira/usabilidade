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
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(
              'assets/img/moca.jpeg', 
              width: 200, 
              height: 200,
            ),
            SizedBox(height: 50), 
            Image.asset(
              'assets/img/paisagem.jpeg', 
              width: 200, 
              height: 200,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          
        },
        tooltip: "Exemplo de botão",
        child: Icon(Icons.add),
      ),
    );
  }
}