// GitHub User Fetch
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const github_div = document.getElementById("github-data");

const getData = async (url) => {
    try {
      const data = await fetch("https://api.github.com/users/EugeneFenko");
      data.json().then(
          user => {
            div_data = createNode('div')
            div_data.className = "row"
            div_data.innerHTML = `
                <div class="col-12 col-sm-6">
                    <p><i class="fas fa-map-marker-alt"></i> ${user.location}</p>
                    <p><i class="fas fa-user-friends"></i> <a target="_blank" href="${user.html_url}">${user.company}</a></p>
                    <p style="flex-wrap: nowrap;"><i class="fas fa-link"></i> <a target="_blank" href="https://${user.blog}">${user.blog}</a></p>
                </div>
                <div class="col-12 col-sm-6">
                    <p><i class="fas fa-users"></i> Followers: ${user.followers}</p>
                    <p><i class="fas fa-bookmark"></i> Following: ${user.following}</p>
                    <p><i class="fas fa-folder-open"></i> Public repositories: ${user.public_repos}</p>
                </div>
            `;
            append(github_div, div_data);
            console.log(user)
        });
      return data;
    } catch (e) {
      console.log("There was an error fetching the data: " + error)
    }
  }
  getData();