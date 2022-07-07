<script lang="ts">
  const query = `query ($id: Int) {
  Character(id: $id){
    name {
      full
    }
    description
    gender
    age
  }
}
`;

  let id = 1;

  let output: HTMLOutputElement;

  async function handleSubmit(_: SubmitEvent) {
    try {
      const res = await fetch("/graphql", {
        method: "POST",
        body: JSON.stringify({
          query,
          variables: {
            id,
          },
        }),
      });

      const { Character } = (await res.json()) as {
        Character: {
          age: string;
          description: string;
          gender: string;
          name: { full: string };
        };
      };

      // This works
      // const res = await fetch("https://graphql.anilist.co", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json",
      //   },
      //   body: JSON.stringify({
      //     query,
      //     variables: {
      //       id,
      //     },
      //   }),
      // });
      // const {
      //   data: { Character },
      // } = (await res.json()) as {
      //   data: {
      //     Character: {
      //       age: string;
      //       description: string;
      //       gender: string;
      //       name: { full: string };
      //     };
      //   };
      // };

      output.innerHTML = `
      <p>Name: ${Character.name.full}</p>
      <p>Age: ${Character.age}</p>
      <p>Gender: ${Character.gender}</p>
      <p>Description: ${Character.description}</p>
      `;
    } catch (error) {
      console.error("Error while fetching", error);
    }
  }
</script>

<h1>Graphql fetch anilist api</h1>

<form on:submit|preventDefault={handleSubmit}>
  <label>
    Select Character id
    <input type="number" name="char_id" bind:value={id} />
  </label>
  <button type="submit">Grab data</button>
</form>

<output bind:this={output} />
