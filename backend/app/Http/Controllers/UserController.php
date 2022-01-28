<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            $user = $this
            ->user
            ->create([
               ‘name’ => $request->get(‘name’),
               ‘email’ => $request->get(‘email’),
               ‘password’ => Hash::make($request->get(‘password’)),
            ]);
         }
    }
}
