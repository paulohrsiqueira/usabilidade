import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: Home()));

class Home extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: const Icon(Icons.home),
        title: const Text('Ursinho'),
      ),
      body: Center(  
        child: Image.network(
          'https://media.giphy.com/media/pt0EKLDJmVvlS/giphy.gif',
        ),
      ),
      backgroundColor: Color.fromARGB(255, 161, 9, 207),
      floatingActionButton: const FloatingActionButton(
        onPressed: null,
        tooltip: 'Exemplo de botão',
        child: Icon(Icons.pets ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.startDocked,
    );
  }
}