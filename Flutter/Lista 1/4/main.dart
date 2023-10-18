import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(home: Home()));

class Home extends StatelessWidget {
  
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.close),  
          onPressed: () {
          },
        ),
        title: Text('Sair da página'),
      ),
      body: Center(
        child: Text(
          'Atividade Wesley',
          style: TextStyle(
            fontSize: 24.0,
            fontWeight: FontWeight.bold,
            color: Colors.yellow,
          ),
        ),
      ),
      backgroundColor: Colors.blue[900],
      floatingActionButton: FloatingActionButton(
        onPressed: () {
        
        },
        tooltip: 'Voltar pra página anterior',
        child: Icon(Icons.arrow_back_ios_outlined ),
      ),
      floatingActionButtonLocation: FloatingActionButtonLocation.startDocked,
    );
  }
}