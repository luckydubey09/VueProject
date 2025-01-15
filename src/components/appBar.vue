<template>
    <div>
      <v-app-bar
        color="primary"
        dense
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-toolbar-title>SHOPEE</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
        <!-- <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-logout</v-icon>
            </v-btn>
          </template>
        </v-menu> -->
      </v-app-bar>
    </div>
  </template>
  <script>
  </script>
  <style>
  </style>