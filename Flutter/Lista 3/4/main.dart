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
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset(
              'assets/img/moca.jpeg', 
              width: 180, 
              height: 180,
            ),
            SizedBox(width: 40), 
            Image.asset(
              'assets/img/paisagem.jpeg', 
              width: 180, 
              height: 180,
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
